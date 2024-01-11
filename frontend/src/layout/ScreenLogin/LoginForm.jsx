import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center border max-w-2xl px-16 py-12 rounded-[74px] border-solid border-black max-md:px-5 w-full h-screen"
    >
      <header className="header justify-center text-black text-2xl self-stretch w-full">
        Username
      </header>
      <div className="border flex shrink-0 h-20 flex-col mt-2 rounded-3xl border-solid border-black w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-full"
        />
      </div>
      <header className="header justify-center text-black text-2xl self-stretch mt-14 w-full">
        Password
      </header>
      <div className="border flex shrink-0 h-20 flex-col mt-2 rounded-3xl border-solid border-black w-full">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-full"
        />
      </div>
      <a
        href="#"
        className="text-cyan-600 text-xl font-light underline self-stretch mt-2 max-md:max-w-full"
      >
        Don't have an account, sign up here
      </a>
      <div className="flex-col justify-center text-black text-center text-2xl font-bold relative overflow-hidden self-center aspect-[3.1147540983606556] w-[190px] max-w-full items-center mt-8 px-16 py-5 max-md:px-5 cursor-pointer">
        <input
          type="submit"
          className="absolute inset-0 w-full h-full cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-xl text-white"
          value="Login"
        />
      </div>
      <header className="header text-black text-xl font-bold self-center whitespace-nowrap mt-8">
        or
      </header>
      <hr className="bg-black self-center w-[413px] shrink-0 max-w-full h-px mt-8" />
      <div className="bg-slate-100 self-stretch flex items-stretch justify-between gap-3.5 mt-8 px-16 py-6 rounded-[36px] max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/906e64d9d90f437b9e3b8283252d6a39ae63fbaff2fc46663744fa08aa55d486?apiKey=d0da03858a984c898c8110607314683e&"
          className="aspect-[0.79] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-stone-950 text-3xl font-bold grow whitespace-nowrap self-start">
          Login with Google
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
