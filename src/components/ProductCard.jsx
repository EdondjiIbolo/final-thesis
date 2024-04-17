import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import "./productcard.css";
import { useStore } from "./store";
export function ProductCard({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const handleAddToCart = () => {
    const productIsInCart = cart?.find((item) => item.id === product?.id);
    if (productIsInCart) return;
    addToCart(product, 1);
  };
  return (
    <div className="product-card flex">
      <picture className="product-card__img" onClick={handleAddToCart}>
        <img src={product?.imageUrl} alt="imagen" />
      </picture>
      <div className="product-card__description flex-grow flex flex-col ga-2 justify-center">
        <p className="product__type  text-zinc-100 italic">{product?.name}</p>

        <p className="price mt-3 text-orange-400 font-bold ">
          ${product?.new_price}
        </p>
      </div>
      <Link
        to={`/product/${product.id}`}
        className="p-1 bg-orange-500 text-white font-bold hover:bg-white transition-all duration-200 ease-linear rounded hover:border-2 hover:text-orange-600 hover:border-orange-600"
      >
        See more
      </Link>
    </div>
  );
}
