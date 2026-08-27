  import connectDB from "@/lib/mongodb";
  import User from "@/models/User";
  import bcrypt from "bcryptjs";
  import jwt from "jsonwebtoken";
  import { cookies } from "next/headers";

  export async function POST(request) {
    try {
      await connectDB();

      const { identifier, password } = await request.json();

      // Check fields
      if (!identifier || !password) {
        return Response.json(
          {
            success: false,
            message: "Email, username, mobile number and password are required",
          },
          { status: 400 },
        );
      }

      // Find user using email, username or mobile number
      const user = await User.findOne({
        $or: [
          { email: identifier.toLowerCase() },
          { userName: identifier },
          { mobileNumber: identifier },
        ],
      });

      // User not found
      if (!user) {
        return Response.json(
          {
            success: false,
            message: "Invalid email/username/mobile number or password",
          },
          { status: 401 },
        );
      }

      // Compare password
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return Response.json(
          {
            success: false,
            message: "Invalid email/username/mobile number or password",
          },
          { status: 401 },
        );
      }

      const token = jwt.sign(
        {
          userId: user._id.toString(),
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        },
      );

      const cookieStore = await cookies();

      cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      // Login successful
      return Response.json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id.toString(),
          fullName: user.fullName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          userName: user.userName,
        },
      });

    } catch (error) {
      console.error("Login error:", error);

      return Response.json(
        {
          success: false,
          message: "Something went wrong",
        },
        { status: 500 },
      );
    }
  }
