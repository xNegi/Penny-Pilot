import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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
