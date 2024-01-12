import { useForm } from "react-hook-form";

// Input field component
const InputField = ({ type, name, register, errors, label }) => (
  <div className="relative flex shrink-0 h-20 flex-col mt-2 rounded-3xl border-solid border-black w-full">
    <header className="relative justify-center text-black text-2xl w-full">
      {label}
    </header>
    <input
      type={type}
      name={name}
      {...register(name, { required: true })}
      className="w-full h-full border border-solid border-black px-4 rounded-3xl"
    />
    {errors[name] && <p className="text-red-500">{`${label} is required`}</p>}
  </div>
);

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative h-fit w-2/4 m-auto flex flex-col justify-center items-center border px-16 py-12 rounded-3xl border-solid border-black"
    >
      <InputField
        type="text"
        name="name"
        register={register}
        errors={errors}
        label="Name"
      />
      <InputField
        type="email"
        name="email"
        register={register}
        errors={errors}
        label="Email"
      />
      <InputField
        type="password"
        name="password"
        register={register}
        errors={errors}
        label="Password"
      />
      <InputField
        type="password"
        name="confirmPassword"
        register={register}
        errors={errors}
        label="Confirm Password"
      />

      <label
        className="flex gap-2.5 mt-3.5 self-start items-start underline text-blue-500 cursor-pointer"
        htmlFor="termsCheckbox"
      >
        <input
          type="checkbox"
          id="termsCheckbox"
          {...register("termsCheckbox", { required: true })}
        />
        Agree with the Terms of Service
      </label>
      {errors.termsCheckbox && (
        <p className="text-red-500">You must agree to the terms of service</p>
      )}

      <input
        type="submit"
        className="relative flex-col justify-center text-white text-center text-2xl font-bold bg-lime-600 self-center items-stretch mt-8 px-12 py-4 rounded-[55px] max-md:px-5 cursor-pointer"
        value="Register"
      />
    </form>
  );
}
