import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./productcard.css";
export function ProductCard({ product }) {
  return (
    <div className="product-card flex">
      <picture className="product-card__img">
        <img src={product?.imageUrl} alt="imagen" />
      </picture>
      <div className="product-card__description flex-grow flex flex-col ga-2 justify-center">
        <p className="product__type  text-zinc-100 italic">{product?.name}</p>

        <p className="text__description">{product?.description}</p>
        <p className="price mt-3 text-orange-400 font-bold ">
          ${product?.new_price}
        </p>
      </div>
    </div>
  );
}
