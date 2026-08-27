import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request){
    try{
        // connect to mongoDB
        await connectDB();

        // Get data from frontend 
        const body = await request.json();

        const{
            fullName,
            email,
            mobileNumber,
            userName,
            password,
            confirmPassword,
        } = body;

        //check required fileds
        if (
            !fullName||
            !email||
            !mobileNumber||
            !userName||
            !password||
            !confirmPassword
        ){
            return Response.json(
                {
                    success:false,
                    message: "All fields are required",
                },
                {status:400}
            );
        }

        //check password confirmation
        if (password !== confirmPassword){
            return Response.json(
                {
                    success:false,
                    message:"Password does not match",
                },
                {status:400}
            );
        }

        //check if emial already exist in DB
        const existingEmail = await User.findOne({email});

        if (existingEmail){
            return Response.json({
                success:false,
                message:"Email already exists in database",
                },
                {status:400}
            );
        }

        //username
        const existingUsername = await User.findOne({userName});

        if (existingUsername){
            return Response.json({
                success:false,
                message:"Username already exists in database",
                },
                {status:400}
            );
        }

        // Check mobile number
        const existingMobile = await User.findOne({ mobileNumber });

        if (existingMobile) {
            return Response.json({
                success: false,
                message: "Mobile number already registered",
            },
            { status: 409 }
            );
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password,10);

        //create user
        const user = await User.create({
            fullName,
            email,
            mobileNumber,
            userName,
            password : hashedPassword,
        });

        return Response.json({
            success:true,
            message:"Account created successfully",
            user:{
                id:user._id,
                fullName: user.fullName,
                email: user.email,
                mobileNumber: user.mobileNumber,
                userName: user.userName,
            },
         },
         {status:201}
        );
    } catch(error){
        console.error("Signup error:", error);

        return Response.json(
            {
                success:false,
                message:"Something went wrong",
            },
            {status:500}
        );
    }
}