import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useStore } from "./store";

export function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products?id=${id}`
        );
        const result = await data;
        console.log(data);
        setProduct(result);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);
  const handleChange = (e) => {
    if (!quantity) {
      setQuantity(1);
      return;
    }
    setQuantity(e.target.value);
    console.log(quantity);
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleDelete = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity === 0) return;
    const productIsInCart = cart?.find((item) => item.id === product?.id);
    if (productIsInCart) {
      addToCart(product, quantity);

      return;
    }
    addToCart(product, 1);
  };
  return (
    <main>
      <Header />
      <main className="p-2 flex items-center justify-center max-w-[980px] mx-auto">
        <section className="grid md:auto-cols-fr md:grid-flow-col rounded   gap-7 p-3">
          <picture className="rounded overflow-hidden animate-fade-down animate-duration-500 animate-delay-200 animate-ease-in-out animate-normal shadow-sm ">
            <img
              src={product?.imageUrl}
              className="flex h-full hover:blur-sm transition-all duration-200 ease-linear cursor-pointer"
              alt={product?.name}
            />
          </picture>
          <form
            className="text-left flex flex-col gap-2 animate-fade-left animate-duration-500 animate-delay-200 animate-ease-in-out animate-normal "
            onSubmit={handleAddToCart}
          >
            <h1 className="text-xl font-bold text-orange-400 drop-shadow-lg italic capitalize">
              {product?.category}
            </h1>
            <article className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl drop-shadow-lg p-2">
                {product?.name}
              </h2>
              <p className="text-zinc-500 italic text-sm">
                {product?.description}
              </p>
              <div className="flex gap-4">
                <p>Price : </p>
                <div className="flex gap-3">
                  <span className="font-medium text-md">
                    <b className="font-bold italic">{product?.new_price}$</b>
                  </span>
                  <span className="text-zinc-400 p-[1px] px-1 text-sm rounded-md bg-orange-100 shadow-sm italic line-through font-bold">
                    {product?.old_price}$
                  </span>
                </div>
              </div>
            </article>
            <section className="flex gap-4 flex-grow items-center pb-5 justify-center">
              <div className="flex p-1 h-10 items-center justify-between w-[90px] bg-zinc-100 rounded">
                <div
                  className="font-bold p-1 cursor-pointer flex items-center"
                  onClick={handleDelete}
                >
                  -
                </div>

                <input
                  type="number"
                  className="flex rounded items-center w-[35px] text-center focus:ring outline-none"
                  style={{ MozAppearance: "none" }}
                  inputMode="numeric"
                  onChange={handleChange}
                  value={quantity}
                />
                <div
                  className="font-bold p-1 cursor-pointer  flex items-center"
                  onClick={handleAdd}
                >
                  +
                </div>
              </div>

              <button className="h-10 flex justify-center items-center gap-3 flex-grow bg-orange-500 rounded-md text-white hover:text-orange-500 hover:bg-white hover:border-orange-500 border-2 transition-all duration-200 ease-in">
                Add to cart
                <picture className="text-white">
                  <img
                    src="/images/icon-cart.svg"
                    className="text-white"
                    alt=""
                  />
                </picture>
              </button>
            </section>
          </form>
        </section>
      </main>
      <Footer />
    </main>
  );
}
