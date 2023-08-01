import { Metadata } from "next";
import { LoginForm } from "@/components/form/loginForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function AuthenticationPage() {
  return (
    <div className="flex justify-center align-middle h-full flex-col p-10 lg:flex bg-[url('/login-bg.jpg')] bg-cover">
      <div className="lg:p-8">
        <div className="p-4 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-2">
            <div className="mb-6 flex justify-center">
              <Image width="120" height="120" alt="Logo" src="/logo.png" />
            </div>
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
