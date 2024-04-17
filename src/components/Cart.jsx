import "./cart.css";

import deletImg from "/images/icon-delete.svg";
import { useState } from "react";
import { useStore } from "./store";
import { Link } from "react-router-dom";
export function CartProduct({ product }) {
  const deleteInCart = useStore((state) => state.deleteInCart);
  return (
    <li className="cart-product__item">
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
            {product?.name?.slice(0, 20)}
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
      <button className="delete-icon">
        <picture onClick={() => deleteInCart(product)}>
          <img src={deletImg} alt="icon delete" />
        </picture>
      </button>
    </li>
  );
}
export function Cart() {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);

  return (
    <section className="cart">
      <header className="cart__header">
        <p>Cart</p>
      </header>
      <main className="cart-products">
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => {
              return <CartProduct key={item.id} product={item} />;
            })}
          </ul>
        ) : (
          <p className="price yeah">Your cart is empty</p>
        )}
      </main>
      {cart.length > 0 && (
        <div className="grid auto-cols-fr grid-flow-col gap-10">
          <button className="btn" onClick={() => clearCart()}>
            Clear Cart
          </button>
          <Link to="/check-out" className="btn">
            Checkout
          </Link>
        </div>
      )}
    </section>
  );
}
