export function Footer() {
  return (
    <main className="relative bg-blue-900">
      <footer className="footer  p-3 gap-5 flex-col md:flex-row flex justify-between items-center max-w-[1280px] mx-auto">
        <section className="flex flex-col gap-5">
          <picture className="container-logo">
            <img src="/images/logo.svg" alt="logo" className="logo  invert" />
          </picture>

          <ul className="flex flex-col md:flex-row gap-3 items-center text-white">
            <li className="menu__item">
              <a href="3" className=" text-lg">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="3" className=" text-lg">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a href="3" className=" text-lg">
                Projects
              </a>
            </li>
          </ul>
        </section>
        <ul className="icon-container  flex gap-3 text-white">
          <li className="icon__item">
            <a href="#" className="icon__link">
              <img src="/images/icon-facebook.svg" alt="" className="icon" />
            </a>
          </li>
          <li className="icon__item">
            <a href="#" className="icon__link">
              <img src="/images/icon-instagram.svg" alt="" className="icon" />
            </a>
          </li>
          <li className="icon__item">
            <a href="#" className="icon__link">
              <img src="/images/icon-twitter.svg" alt="" className="icon" />
            </a>
          </li>
          <li className="icon__item">
            <a href="#" className="icon__link">
              <img src="/images/icon-pinterest.svg" alt="" className="icon" />
            </a>
          </li>
        </ul>
      </footer>
      <div className="bg-gray-200  mx-auto p-2">
        <p className="text-gray-700 max-w-[1280px] mx-auto font-bold ">
          <marquee behavior="scroll" direction="left">
            &copy; 2024 My Company. All rights reserved.
          </marquee>
        </p>
      </div>
    </main>
  );
}
