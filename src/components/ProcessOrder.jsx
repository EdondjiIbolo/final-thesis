import { Header } from "./Header";
import { Footer } from "./Footer";
import { useStore } from "./store";
import { useEffect, useState } from "react";
import { SecureIcon } from "./Icons";

export default function ProcessOrder() {
  const cart = useStore((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(null);
  useEffect(() => {
    let price = 0;
    const CartTotal = () => {
      const map = cart?.forEach((item) => {
        price += item?.amount;
        setTotalPrice(price);
      });
    };
    CartTotal();
  }, [cart]);
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-[980px] flex-grow grid md:auto-cols-fr md:grid-flow-col mx-auto place-content-center gap-20 p-3">
        <section>
          <ul className="flex flex-col gap-3">
            {cart.map((item) => {
              return <CartProduct key={item.id} product={item} />;
            })}
          </ul>
          <section className="flex p-2 flex-col justify-start gap-2 items-start">
            <p className="text-sm text-left ">
              Address:{" "}
              <b className="italic">
                中国天津市西青区李七庄秀川路程华欣苑5号楼3单元202室
              </b>
            </p>
            <p className="text-sm  ">
              Name: <b className="italic">Enzo Mbula</b>
            </p>
            <p className="text-sm  ">
              Phone: <b className="italic">13256717532</b>
            </p>
          </section>
        </section>

        <section className="border border-zinc-400 shadow-sm rounded flex flex-col gap-4 p-3">
          <div className="flex gap-6">
            <p className="font-semibold">{cart.length} Products</p>
            <p className="font-bold italic">{totalPrice}$</p>
          </div>
          <div className="flex gap-6">
            <p className="font-semibold"> Shipping Fee</p>
            <p className="font-bold italic">3.5$</p>
          </div>
          <span className="p-2 font-bold flex gap-10 justify-between items-center bg-zinc-300 rounded-sm shadow-md">
            <p className="text-sm">Total amount (with taxes..)</p>{" "}
            <b>{totalPrice + 3.5 + 1.2}$</b>
          </span>
          <button className="w-36 p-2 mx-auto  bg-black text-white  border-white rounded-md   border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-250 ease-linear">
            Order now
          </button>
          <div className="text-zinc-400 italic  flex items-center justify-center">
            <SecureIcon />
            All payment are secure
          </div>
          <picture className="w-12 h-12 bg-white p-2 shadow-sm border mx-auto">
            <img src="/images/icon-paypal.svg" alt="" />
          </picture>
        </section>
      </main>
      <Footer />
    </main>
  );
}
function CartProduct({ product }) {
  return (
    <li className="cart-product__item bg-zinc-100 p-2 rounded shadow-sm">
      <section className="cart-product__cont">
        <picture className="cart-product__img">
          <img
            src={product?.imageUrl}
            alt=""
            className="rounded w-full h-full object-cover"
          />
        </picture>
        <div className="div">
          <p className="product__description text-left">
            {product?.name?.slice(0, 30)}
          </p>
          <span>
            <p className="product__description">
              {product?.new_price} * {product?.cantidad}
            </p>
            <p className="price border-l pl-2 font-bold italic">
              {product?.new_price * product?.cantidad}${" "}
            </p>
          </span>
        </div>
      </section>
    </li>
  );
}
