import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import mongoose from "mongoose";

//GET method - for submitting new data to the server
export async function POST(request) {
  try {
    await connectDB();

     // Get JWT from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Decode / verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const body = await request.json();

    const transaction = await Transaction.create({
      userId: decoded.userId,
      type: body.type,
      amount: body.amount,
      category: body.category,
      description: body.description,
      date: body.date,
    });

    return NextResponse.json(
      {
        message: "Transaction created successfully",
        transaction,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST transaction error:", error);

    return NextResponse.json(
      {
        message: "Failed to create transaction",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
//GET method - for reading/retrieving data from server
export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Decode / verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const transactions = await Transaction.find({
        userId: decoded.userId,
    }).sort({ date: -1 });

    return NextResponse.json(
      {
        message: "Transactions fetched successfully",
        transactions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET transaction error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch transactions",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PATCH method - for partial updates/edits from the existing user/data
export async function PATCH(request) {
  try {
    // 1. Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Get data from request
    const body = await request.json();

    const {
      transactionId,
      type,
      amount,
      category,
      description,
      date,
      paymentMethod,
    } = body;

    // 4. Make sure transaction ID exists
    if (!transactionId) {
      return Response.json(
        { message: "Transaction ID is required" },
        { status: 400 }
      );
    }

    // 5. Check if transaction ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(transactionId)) {
      return Response.json(
        { message: "Invalid transaction ID" },
        { status: 400 }
      );
    }

    // 6. Find transaction belonging to logged-in user
    const transaction = await Transaction.findOne({
      _id: transactionId,
      userId: decoded.userId,
    });

    if (!transaction) {
      return Response.json(
        { message: "Transaction not found" },
        { status: 404 }
      );
    }

    // 7. Update only fields that were provided
    if (type !== undefined) transaction.type = type;
    if (amount !== undefined) transaction.amount = amount;
    if (category !== undefined) transaction.category = category;
    if (description !== undefined) transaction.description = description;
    if (date !== undefined) transaction.date = date;
    if (paymentMethod !== undefined) {
      transaction.paymentMethod = paymentMethod;
    }

    // 8. Save updated transaction
    await transaction.save();

    return Response.json(
      {
        message: "Transaction updated successfully",
        transaction,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("PATCH transaction error:", error);

    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

//DELETE Meethod - for permanently deleting data from the server
export async function DELETE(request) {
  try {
    // 1. Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Get transaction ID
    const { transactionId } = await request.json();

    if (!transactionId) {
      return Response.json(
        { message: "Transaction ID is required" },
        { status: 400 }
      );
    }

     // 4. Check if transaction ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(transactionId)) {
      return Response.json(
        { message: "Invalid transaction ID" },
        { status: 400 }
      );
    }

    // 5. Delete only if transaction belongs to logged-in user
    const deletedTransaction = await Transaction.findOneAndDelete({
      _id: transactionId,
      userId: decoded.userId,
    });

    if (!deletedTransaction) {
      return Response.json(
        { message: "Transaction not found" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        message: "Transaction deleted successfully",
        transaction: deletedTransaction,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("DELETE transaction error:", error);

    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}