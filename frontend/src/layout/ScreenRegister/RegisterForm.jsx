import React from "react";

function RegistrationForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form
      className="border flex max-w-[726px] flex-col justify-center items-center px-16 py-11 rounded-[74px] border-solid border-black max-md:px-5"
      onSubmit={handleFormSubmit}
    >
      <label
        className="header mt-6 justify-center text-black text-2xl self-stretch max-md:max-w-full"
        htmlFor="email"
      >
        Email:
      </label>
      <input
        className="border self-stretch flex shrink-0 h-[67px] flex-col mt-1.5 rounded-3xl border-solid border-black max-md:max-w-full"
        type="email"
        id="email"
      />

      <label
        className="header mt-6 justify-center text-black text-2xl self-stretch max-md:max-w-full"
        htmlFor="username"
      >
        Username:
      </label>
      <input
        className="border self-stretch flex shrink-0 h-[67px] flex-col mt-1.5 rounded-3xl border-solid border-black max-md:max-w-full"
        type="text"
        id="username"
      />

      <label
        className="header mt-6 justify-center text-black text-2xl self-stretch max-md:max-w-full"
        htmlFor="password"
      >
        Password:
      </label>
      <input
        className="border self-stretch flex shrink-0 h-[67px] flex-col mt-1.5 rounded-3xl border-solid border-black max-md:max-w-full"
        type="password"
        id="password"
      />

      <label
        className="header mt-6 justify-center text-black text-2xl self-stretch max-md:max-w-full"
        htmlFor="rePassword"
      >
        Re-enter Password:
      </label>
      <input
        className="border self-stretch flex shrink-0 h-[67px] flex-col rounded-3xl border-solid border-black max-md:max-w-full"
        type="password"
        id="rePassword"
      />

      <label
        className="flex gap-2.5 mt-3.5 self-start items-start"
        htmlFor="termsCheckbox"
      >
        <input type="checkbox" id="termsCheckbox" />
        Agree with the Terms of Service
      </label>

      <button
        className="btn-register justify-center text-white text-center text-2xl font-bold bg-lime-600 self-center items-stretch mt-8 px-12 py-4 rounded-[55px] max-md:px-5"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
