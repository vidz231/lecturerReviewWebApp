import React from "react";
import RegisterForm from "./RegisterForm";

export default function ScreenRegister() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <h1 className="text-4xl text-center">Register</h1>
      <RegisterForm />
    </div>
  );
}
