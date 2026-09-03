import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Account from "@/models/Account";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// POST - Create a new account
export async function POST(request) {
  try {
    await connectDB();

    // Get JWT from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get request data
    const body = await request.json();

    const { accountName, accountType, initialBalance } = body;

    // Validate required fields
    if (!accountName || !accountType || initialBalance === undefined) {
      return NextResponse.json(
        { message: "All account fields are required" },
        { status: 400 },
      );
    }

    // Create account
    const account = await Account.create({
      userId: decoded.userId,
      accountName,
      accountType,
      initialBalance,
    });

    return NextResponse.json(
      {
        message: "Account created successfully",
        account,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST account error:", error);

    return NextResponse.json(
      {
        message: "Failed to create account",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

// GET - Fetch logged-in user's accounts
export async function GET() {
  try {
    await connectDB();

    // Get JWT from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch only accounts belonging to logged-in user
    const accounts = await Account.find({
      userId: decoded.userId,
    }).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: "Accounts fetched successfully",
        accounts,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("GET accounts error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch accounts",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

// PATCH - Update an account
export async function PATCH(request) {
  try {
    await connectDB();
    // Get JWT from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Get request data
    const body = await request.json();
    const { accountId, accountName, accountType, initialBalance } = body;
    // Validate account ID
    if (!accountId) {
      return NextResponse.json(
        { message: "Account ID is required" },
        { status: 400 },
      );
    }
    // Find account belonging to logged-in user
    const account = await Account.findOne({
      _id: accountId,
      userId: decoded.userId,
    });
    if (!account) {
      return NextResponse.json(
        { message: "Account not found" },
        { status: 404 },
      );
    }
    // Update fields
    if (accountName !== undefined) {
      account.accountName = accountName;
    }
    if (accountType !== undefined) {
      account.accountType = accountType;
    }
    if (initialBalance !== undefined) {
      account.initialBalance = initialBalance;
    }
    // Save changes
    await account.save();
    return NextResponse.json(
      { message: "Account updated successfully", account },
      { status: 200 },
    );
  } catch (error) {
    console.error("PATCH account error:", error);
    return NextResponse.json(
      { message: "Failed to update account", error: error.message },
      { status: 500 },
    );
  }
}

// DELETE - Delete an account
export async function DELETE(request) {
  try {
    await connectDB();
    // Get JWT from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get account ID
    const { accountId } = await request.json();
    if (!accountId) {
      return NextResponse.json(
        { message: "Account ID is required" },
        { status: 400 },
      );
    }
    // Find and delete only if account belongs to logged-in user
    const deletedAccount = await Account.findOneAndDelete({
      _id: accountId,
      userId: decoded.userId,
    });
    if (!deletedAccount) {
      return NextResponse.json(
        { message: "Account not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { message: "Account deleted successfully", account: deletedAccount },
      { status: 200 },
    );
  } catch (error) {
    console.error("DELETE account error:", error);
    return NextResponse.json(
      { message: "Failed to delete account", error: error.message },
      { status: 500 },
    );
  }
}
