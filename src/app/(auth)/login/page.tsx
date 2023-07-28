import { Metadata } from "next";
import { LoginForm } from "@/components/form/loginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function AuthenticationPage() {
  return (
    <div className="flex justify-center align-middle h-full flex-col p-10 lg:flex">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to your account
            </h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
