import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Transaction from "@/models/Transaction";
import Account from "@/models/Account";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    //no token
    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 },
      );
    }

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //find user
    const user = await User.findOne({
      _id: decoded.userId,
    }).select("-password");

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        userName: user.userName,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Auth/me error:", error);

    return Response.json(
      {
        success: false,
        message: "Invalid or expired session",
      },
      { status: 401 },
    );
  }
}

// DELETE USER ACCOUNT
export async function DELETE() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // No token
    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 },
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.userId;

    // Check if user exists
    const user = await User.findById(userId);

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    // Delete user's transactions
    await Transaction.deleteMany({ userId });

    // Delete user's accounts
    await Account.deleteMany({ userId });

    // Delete user
    await User.findByIdAndDelete(userId);

    // Delete authentication cookie
    cookieStore.delete("token");

    return Response.json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.error("Delete account error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to delete account",
      },
      { status: 500 },
    );
  }
}