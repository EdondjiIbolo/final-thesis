import { Footer } from "./Footer";
import { Header } from "./Header";

export function Setting() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />
      <main className=" flex-grow">
        <article className="  max-w-[1280px] mx-auto p-3">
          <article>
            <h2 className="text-xl font-bold italic font-sans p-2">
              Personal Information
            </h2>
            <p className="italic max-w-[130ch] mx-auto p-2 mb-3 text-pretty text-center">
              Welcome to the account settings page. Here you can view and update
              your personal information. Please ensure your details are kept up
              to date for an optimal experience. Here you can make other
              adjustments related to your account, such as updating your
              address, notification preferences, etc. Remember to keep your
              information secure and up to date at all times. If you have any
              questions or need assistance, please don`t hesitate to contact us.
            </p>
          </article>

          <form className="flex flex-col w-1/2 mx-auto ">
            <label className="flex w-full items-center p-2 mx-auto justify-between">
              <p className="w-[200px] text-left font-serif italic text-zinc-7 font-medium00">
                Name:
              </p>
              <input
                className=" bg-white border border-zinc-300 p-2  focus:ring outline-none rounded shadow-sm flex-grow"
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label className="flex w-full items-center p-2 mx-auto justify-between">
              <p className="w-[200px] text-left font-serif italic text-zinc-7 font-medium00">
                Family name:
              </p>
              <input
                className=" bg-white border border-zinc-300 p-2  focus:ring outline-none rounded shadow-sm flex-grow"
                type="text"
                name="surename"
                placeholder="surename"
              />
            </label>
            <label className="flex w-full items-center p-2 mx-auto justify-between">
              <p className="w-[200px] text-left font-serif italic text-zinc-7 font-medium00">
                Email Address:
              </p>
              <input
                className=" bg-white border border-zinc-300 p-2  focus:ring outline-none rounded shadow-sm flex-grow"
                type="email"
                name="email"
                placeholder="email"
              />
            </label>
            <label className="flex w-full items-center p-2 mx-auto justify-between">
              <p className="w-[200px] text-left font-serif italic text-zinc-7 font-medium00">
                Password:
              </p>
              <input
                className=" bg-white border border-zinc-300 p-2  focus:ring outline-none rounded shadow-sm flex-grow"
                type="password"
                name="password"
                placeholder="password"
              />
            </label>
            <label className="flex w-full items-center p-2 mx-auto justify-between">
              <p className="w-[200px] text-left font-serif italic text-zinc-7 font-medium00">
                New Password:
              </p>
              <input
                className=" bg-white border border-zinc-300 p-2  focus:ring outline-none rounded shadow-sm flex-grow"
                type="password"
                name="new_password"
                placeholder="New password"
              />
            </label>
            <label className="flex w-full items-center p-2 mx-auto justify-between">
              <p className="w-[200px] text-left font-serif italic text-zinc-7 font-medium00">
                Shipping Address:
              </p>
              <input
                className=" bg-white border border-zinc-300 p-2  focus:ring outline-none rounded shadow-sm flex-grow"
                type="text"
                name="Address"
                placeholder="Address"
              />
            </label>
            <div className=" w-full flex justify-center p-2">
              <button className=" p-2 text-lg  font-semibold italic bg-slate-900 text-white border-white rounded-md w-44  border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-250 ease-linear">
                Submit
              </button>
            </div>
          </form>
        </article>
      </main>
      <Footer />
    </main>
  );
}
