import React from "react";
import LoginForm from "./LoginForm";
import NavBar from "../../component/NavBar";
import PostCard from "../../component/PostCard";

export default function ScreenLogin() {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full flex justify-center items-center">
        <LoginForm />
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
}
