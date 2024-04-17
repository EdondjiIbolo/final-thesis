import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomerIcon, MachinesIcon, PartsIcon, UsersIcon } from "./Icons";
export function About() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[210px]  sm:h-96 overflow-hidden animate-fade animate-once animate-duration-500 animate-delay-100 animate-ease-linear">
          <picture className="absolute z-5 left-0  w-full  ">
            <img
              src="/images/2.avif"
              className="h-96 blur-xl object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
              alt="Banner img"
            />
          </picture>

          <section className=" p-1 px-4 grid place-content-center z-10 text-wrap  relative  gap-8 w-full h-full   sm:h-[320px]">
            <h1 className="font-semibold text-4xl w-full text-black text-center">
              Discover Our Passion for Fashion
            </h1>
            <p className="font-bold text-2xl italic w-full text-black text-center">
              Style is a way to say who you are without having to speak.
            </p>
          </section>
        </section>

        <main className="w-full ">
          <section className=" bg-slate-50">
            <section className="w-full max-w-[1310px] m-auto  pt-20 px-4  animate-fade-up animate-once animate-duration-[400ms] animate-delay-[50ms] animate-ease-linear">
              <h3 className=" font-medium text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
                About Us
              </h3>
              <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr pb-5">
                <article className="flex flex-col text-left gap-4">
                  <p>
                    Discover the heart behind our fashion journey. Founded by
                    youthful visionaries a decade ago, we`ve been redefining
                    style with passion and purpose. Explore our collection of
                    curated clothing and footwear, crafted to inspire confidence
                    and celebrate individuality.
                  </p>
                  <p>
                    At Sneakers, we`re not just another online retailer—we`re
                    purveyors of style and confidence. For the past decade,
                    we`ve been curating a collection that reflects the
                    ever-evolving landscape of fashion, catering to individuals
                    who seek more than just clothing; they seek an experience..
                  </p>
                  <p>
                    A decade ago, a dream took shape—two young minds set out to
                    redefine fashion. Today, our journey continues, offering a
                    curated selection of clothing and footwear that embodies our
                    passion for style and self-expression. Celebrate a decade of
                    creativity with us.
                  </p>
                  <p>
                    For over 10 years, we`ve been crafting a fashion experience
                    that speaks to the spirit of adventure and expression. From
                    humble beginnings as young entrepreneurs, we`ve evolved into
                    a destination for timeless style and quality craftsmanship.
                    Join us on this fashionable odyssey.
                  </p>
                </article>
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/images/3.avif"
                    alt="Company introduction image"
                    className="object-cover h-96 w-full "
                  />
                </picture>
              </section>
            </section>
          </section>
          <section className=" bg-slate-100">
            <section className="w-full max-w-[1310px] m-auto py-10 px-5 ">
              <h3 className=" font-medium text-4xl mb-3 max-w-[50ch] text-start text-pretty ">
                Our Passion
              </h3>
              <hr />
              <section className="grid sm:grid-flow-col  pt-2 gap-8 sm:gap-6 sm:auto-cols-fr">
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/images/4.avif"
                    alt="service"
                    className="object-cover h-72 w-full "
                  />
                </picture>
                <article className="flex flex-col text-left gap-4">
                  <p>
                    <p>
                      Curated Selection: Our team meticulously selects each
                      piece to ensure it meets our standards of quality, style,
                      and comfort.
                    </p>
                    <p>
                      {" "}
                      Quality Craftsmanship: We collaborate with designers and
                      artisans who share our commitment to excellence, offering
                      you pieces that stand the test of time.
                    </p>
                    <p>
                      Inclusive Fashion: We believe style is for everyone. Our
                      diverse range of sizes, styles, and trends reflects our
                      dedication to inclusivity.
                    </p>
                  </p>
                  <p>
                    Step into a world of endless possibilities with [Nombre de
                    la Tienda]. Whether you`re looking for everyday essentials,
                    statement pieces, or timeless classics, we have something
                    for every occasion and taste.Discover the latest trends and
                    timeless styles crafted with care and attention to detail.
                    From casual tees and jeans to elegant dresses and suits, our
                    collection embodies versatility and sophistication.
                  </p>
                </article>
              </section>
            </section>
          </section>
          <section className=" bg-slate-100">
            <section className="w-full max-w-[1310px] m-auto pb-10 pt-5 px-5 flex flex-col gap-4">
              <hr />
              <section className="flex sm:flex-row gap-4  justify-between flex-col h-min p-2 rounded">
                <article className=" md:w-[60%]">
                  <article className="flex flex-col text-center sm:text-left gap-1 ">
                    <h3 className="font-bold text-xl">What We Do:</h3>
                    <p>
                      <p>
                        Authenticity: Every item is sourced from reputable
                        brands and designers, guaranteeing authenticity and
                        originality.
                      </p>
                      <p>
                        {" "}
                        Exceptional Service: From personalized recommendations
                        to hassle-free returns, we`re here to make your shopping
                        experience seamless.
                      </p>
                      <p>
                        Community Engagement: We`re more than a store; we`re a
                        community. Join us for fashion tips, trends, and
                        exclusive events.
                      </p>
                    </p>
                  </article>
                </article>

                <picture className="h-60 rounded overflow-hidden md:w-[35%] b pt-0">
                  <img
                    src="/images/1.avif"
                    alt="team members"
                    className="object-cover h-full w-full"
                  />
                </picture>
              </section>
            </section>
          </section>
          <section className="w-full  bg-slate-100">
            <section className="  flex justify-center items-center m-auto py-10 px-5 ">
              <hr />

              <article className="flex w-full flex-wrap pt-9 px-6 items-center justify-evenly">
                <div className="flex gap-3 flex-col justify-center  items-center">
                  <CustomerIcon />
                  <p className="text-2xl flex gap-2  italic">
                    <strong className="text-blue-600 font-bold w-20 text-right">
                      +8.000
                    </strong>
                    customers
                  </p>
                </div>

                <div className="flex gap-3 flex-col justify-center  items-center">
                  <MachinesIcon />
                  <p className="text-2xl flex gap-2  italic">
                    <strong className="text-blue-600 font-bold w-34 text-right">
                      +50.000
                    </strong>{" "}
                    Products
                  </p>
                </div>
                <div className="flex gap-3 flex-col justify-center  items-center">
                  <PartsIcon />
                  <p className="text-2xl flex gap-2  italic">
                    <strong className="text-blue-600 font-bold w-30 text-right">
                      +200.000{" "}
                    </strong>
                    Ordered Products
                  </p>
                </div>
              </article>
            </section>
          </section>
          <section className=" bg-slate-50">
            <section className="w-full max-w-[1310px] m-auto   p-6 pt-20 ">
              <h3 className=" font-semibold text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
                Why Choose Us?
              </h3>
              <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
                <article className="flex flex-col text-left gap-4">
                  <p>
                    A Decade of Dedication: With ten years of experience, we
                    understand fashion`s nuances and trends better than anyone.
                    Youthful Vision: Founded by young entrepreneurs, we inject
                    fresh perspectives into everything we do. Passion-Driven:
                    Our love for fashion fuels our commitment to delivering
                    unique, quality pieces to your doorstep.
                  </p>
                  <p>
                    Join our community of fashion enthusiasts and embrace a
                    lifestyle where clothing is more than just a necessity—it`s
                    an art form. Whether you`re a trendsetter or a classic
                    connoisseur, [Nombre de la Tienda] is your destination for
                    curated fashion experiences.
                  </p>
                </article>
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/images/5.webp"
                    alt="innovation"
                    className="object-cover"
                  />
                </picture>
              </section>
            </section>
          </section>
        </main>
      </main>
      <Footer />
    </>
  );
}
