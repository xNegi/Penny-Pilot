import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
    return (
        <div className="min-h-[calc(100vh-22px)] flex flex-col gap-4 my-2 mx-3 sm:mx-6 md:mx-10 lg:mx-16">
            <SignupForm/>
        </div>
    )
}