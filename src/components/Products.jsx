import "./productos.css";
import { ProductCard } from "./ProductCard";

export function Products({ collection }) {
  const productos = collection;

  return (
    <>
      {productos?.map((product) => {
        return (
          <div
            key={product.id}
            className={`product animate-fade-right animate-once animate-duration-[700ms] animate-delay-[100ms]`}
          >
            <ProductCard product={product} />
          </div>
        );
      })}
    </>
  );
}
