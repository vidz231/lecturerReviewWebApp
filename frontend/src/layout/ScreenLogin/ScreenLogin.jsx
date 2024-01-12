import React from "react";
import LoginForm from "./LoginForm";
import NavBar from "../../component/NavBar";

export default function ScreenLogin() {
  return (
    <>
      <NavBar />
      <div className="h-full w-full flex justify-center items-center">
        <LoginForm />
      </div>
    </>
  );
}
