import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <div className="login-page flex flex-col gap-4 mx-2 sm:mx-6 lg:mx-16">
            <LoginForm />
        </div>
    )
}