import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomerIcon, MachinesIcon, PartsIcon, UsersIcon } from "./Icons";
export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[210px]  sm:h-96 overflow-hidden animate-fade animate-once animate-duration-500 animate-delay-100 animate-ease-linear">
          <picture className="absolute z-5 left-0  w-full  ">
            <img
              src="/images/image-avatar.png"
              className="h-96 blur-xl object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
              alt="Banner img"
            />
          </picture>

          <section className=" p-1 px-4 grid place-content-center z-10 text-wrap  relative  gap-8 w-full h-full   sm:h-[320px]">
            <h1 className="font-bold text-4xl w-full text-black text-center">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-semibold text-lg sm:text-2xl w-full max-w-[60ch] text-black text-center">
              Lorem, ipsum dolor.
            </p>
          </section>
        </section>

        <main className="w-full ">
          <section className=" bg-slate-50">
            <section className="w-full max-w-[1310px] m-auto  pt-20 px-4  animate-fade-up animate-once animate-duration-[400ms] animate-delay-[50ms] animate-ease-linear">
              <h3 className=" font-medium text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
                Lorem, ipsum dolor.
              </h3>
              <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
                <article className="flex flex-col text-left gap-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda fugiat quo nesciunt doloribus quidem accusamus
                    adipisci ipsa eveniet vel necessitatibus numquam veniam
                    corporis, iste ducimus inventore temporibus dolores quos
                    saepe officiis blanditiis doloremque alias sit aliquid.
                    Corrupti quis necessitatibus ducimus soluta, impedit
                    pariatur dolores! Magnam libero placeat eum sapiente saepe!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda fugiat quo nesciunt doloribus quidem accusamus
                    adipisci ipsa eveniet vel necessitatibus numquam veniam
                    corporis, iste ducimus inventore temporibus dolores quos
                    saepe officiis blanditiis doloremque alias sit aliquid.
                    Corrupti quis necessitatibus ducimus soluta, impedit
                    pariatur dolores! Magnam libero placeat eum sapiente saepe!
                  </p>
                </article>
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/images/p1_product_i1.png"
                    alt="Company introduction image"
                    className="object-cover h-72 w-full "
                  />
                </picture>
              </section>
            </section>
          </section>
          <section className=" bg-slate-100">
            <section className="w-full max-w-[1310px] m-auto py-10 px-5 ">
              <h3 className=" font-medium text-4xl mb-3 max-w-[50ch] text-start text-pretty ">
                Lorem, ipsum dolor.
              </h3>
              <hr />
              <section className="grid sm:grid-flow-col  pt-2 gap-8 sm:gap-6 sm:auto-cols-fr">
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/images/p1_product_i1.png"
                    alt="service"
                    className="object-cover h-72 w-full "
                  />
                </picture>
                <article className="flex flex-col text-left gap-4">
                  <h3 className="font-bold text-xl">Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, quia adipisci! Eum quam aliquam vel, minima quidem
                    quibusdam sit explicabo ducimus, aspernatur enim nulla
                    maxime, soluta rerum in doloremque ex consectetur fuga
                    aperiam dignissimos. Tempora odio iure quaerat hic quas!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda fugiat quo nesciunt doloribus quidem accusamus
                    adipisci ipsa eveniet vel necessitatibus numquam veniam
                    corporis, iste ducimus inventore temporibus dolores quos
                    saepe officiis blanditiis doloremque alias sit aliquid.
                    Corrupti quis necessitatibus ducimus soluta, impedit
                    pariatur dolores! Magnam libero placeat eum sapiente saepe!
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
                    <h3 className=" font-bold text-xl mb-1 italic mt-3 max-w-[50ch] text-start text-pretty ">
                      Lorem ipsum dolor sit.
                    </h3>
                    <div className="flex flex-col gap-1 text-left">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur quibusdam dolore magni vel. Soluta sint ad,
                        fugit saepe, earum hic dicta perspiciatis perferendis
                        magni commodi similique eligendi nam tempora adipisci
                        eum. Saepe veritatis temporibus praesentium, adipisci
                        neque numquam obcaecati aut vitae odit? Ipsam fugiat
                        sint rem eaque architecto, sapiente possimus!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur quibusdam dolore magni vel. Soluta sint ad,
                        fugit saepe, earum hic dicta perspiciatis perferendis
                        magni commodi similique eligendi nam tempora adipisci
                        eum. Saepe veritatis temporibus praesentium, adipisci
                        neque numquam obcaecati aut vitae odit? Ipsam fugiat
                        sint rem eaque architecto, sapiente possimus!
                      </p>
                    </div>
                  </article>
                </article>

                <picture className="h-60 rounded overflow-hidden md:w-[35%] b pt-0">
                  <img
                    src="/images/p1_product_i1.png"
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
                Lorem ipsum dolor sit amet.
              </h3>
              <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
                <article className="flex flex-col text-left gap-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt quidem itaque explicabo magni exercitationem
                    voluptatum mollitia aperiam ipsam qui quasi! Earum dicta
                    nulla laborum obcaecati! Molestias recusandae doloremque
                    autem unde excepturi adipisci similique labore quam,
                    nesciunt iusto ut tempora dolorem!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt quidem itaque explicabo magni exercitationem
                    voluptatum mollitia aperiam ipsam qui quasi! Earum dicta
                    nulla laborum obcaecati! Molestias recusandae doloremque
                    autem unde excepturi adipisci similique labore quam,
                    nesciunt iusto ut tempora dolorem!
                  </p>
                </article>
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/images/p1_product_i1.png"
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
