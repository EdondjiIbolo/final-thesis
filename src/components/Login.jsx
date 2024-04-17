import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <main className=" h-screen grid place-content-center w-full ">
        <picture className="absolute w-screen h-screen">
          <img src="./images/bg-image.jpg" alt="bg-image" className="w-full" />
        </picture>
        <form
          className="relative my-auto  bg-white md:w-[500px] pt-6 gap-3 h-[350px] rounded-md flex items-center justify-center flex-col"
          onSubmit={handleSubmit}
        >
          <picture className="absolute w-24 h-24 -top-12 bg-white rounded-full">
            <img src="./images/icon-user.svg" alt="" />
          </picture>
          <label className=" flex  items-center">
            <p className="text-left text-lg font-semibold italic w-24">
              Email :
            </p>
            <input
              className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none focus:ring p-2"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label className=" flex  items-center">
            <p className="text-left text-lg font-semibold italic w-24">
              Password :
            </p>
            <input
              className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none focus:ring p-2"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
          <div className="mt-4">
            <button className="w-36 p-2 bg-   bg-black text-white  border-white rounded-md   border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-250 ease-linear">
              Log in
            </button>
          </div>
          <div className="mt-4">
            <span className="font-semibold"> Dont you have an account ?</span>{" "}
            <Link to="/signin" className="text-blue-500 italic hover:underline">
              Sing in
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
export function Signin() {
  return (
    <>
      <main className=" h-screen grid place-content-center w-full ">
        <picture className="absolute w-screen h-screen">
          <img src="./images/bg-image.jpg" alt="bg-image" className="w-full" />
        </picture>
        <form className="relative my-auto text-nowrap  bg-white md:w-[500px] pt-6 gap-3 h-[450px] rounded-md flex items-center justify-center flex-col">
          <picture className="absolute w-24 h-24 -top-12 bg-white rounded-full">
            <img src="./images/icon-user.svg" alt="" />
          </picture>
          <div className="flex gap-4">
            <label className=" flex flex-col  ">
              <p className="text-left text-md font-semibold italic ">Name </p>
              <input
                className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none focus:ring p-2"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </label>
            <label className=" flex flex-col  ">
              <p className="text-left text-md font-semibold italic ">
                Surename
              </p>
              <input
                className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none focus:ring p-2"
                type="text"
                name="surename"
                placeholder="Enter your surename"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className=" flex flex-col  ">
              <p className="text-left text-md font-semibold italic ">Email :</p>
              <input
                className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none focus:ring p-2"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </label>
            <label className=" flex flex-col  ">
              <p className="text-left text-md font-semibold italic ">
                Password
              </p>
              <input
                className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none focus:ring p-2"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>
          </div>
          <div className=" flex gap-4 w-[420px]">
            <div className=" flex-grow p-2  bg-black text-white  border-white rounded-md   border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-250 ease-linear">
              verification Code
            </div>
            <input
              className="bg-zinc-200 bg-opacity-70 rounded text-black shadow-sm outline-none   p-2"
              type="number"
              name="verifycode"
              placeholder="Code"
            />
          </div>
          <div className="mt-4">
            <button className="w-36 p-2    bg-black text-white  border-white rounded-md   border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-250 ease-linear">
              Sign in
            </button>
          </div>
          <div className="mt-4">
            <span className="font-semibold"> already have an account ?</span>{" "}
            <Link to="/login" className="text-blue-500 italic hover:underline">
              Log in
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
