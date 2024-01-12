import { useForm } from "react-hook-form";

// Input field component
const InputField = ({ type, name, register, errors, label }) => (
  <div className="relative  flex shrink-0 h-20 flex-col mt-2 rounded-3xl border-solid border-black w-full">
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

export default function LoginForm() {
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
        type="email"
        name="email"
        register={register}
        errors={errors}
        label="Username"
      />
      <InputField
        type="password"
        name="password"
        register={register}
        errors={errors}
        label="Password"
      />

      <a
        href="#"
        className="relative text-cyan-600 text-xl font-light underline self-stretch mt-2 max-md:max-w-full"
      >
        Don't have an account, sign up here
      </a>

      <div className="relative flex-col justify-center text-black text-center text-2xl font-bold overflow-hidden self-center aspect-[3.1147540983606556] w-48 max-w-full items-center mt-8 px-16 py-5 max-md:px-5 cursor-pointer">
        <input
          type="submit"
          className="absolute inset-0 w-full h-full cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-xl text-white"
          value="Login"
        />
      </div>
      <header className="relative header text-black text-xl font-bold self-center whitespace-nowrap mt-8">
        or
      </header>
      <div className="relative bg-slate-100 self-stretch flex items-stretch justify-between gap-3.5 mt-8 px-16 py-6 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/906e64d9d90f437b9e3b8283252d6a39ae63fbaff2fc46663744fa08aa55d486?apiKey=d0da03858a984c898c8110607314683e&"
          className="relative aspect-[0.79] object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
        />
        <div className="relative text-stone-950 text-3xl font-bold grow whitespace-nowrap self-start">
          Login with Google
        </div>
      </div>
    </form>
  );
}
