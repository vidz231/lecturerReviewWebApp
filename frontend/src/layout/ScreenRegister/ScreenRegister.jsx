import React from "react";
import RegisterForm from "./RegisterForm";
import NavBar from "../../component/NavBar";

export default function ScreenRegister() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center items-center flex-col w-full h-screen">
        <h1 className="text-4xl text-center">Register</h1>
        <RegisterForm />
      </div>
    </>
  );
}
