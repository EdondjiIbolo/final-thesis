import "./productos.css";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../Hooks/useProducts";
export function Products({ collection }) {
  const productos = collection;

  return (
    <>
      {productos?.map((product) => {
        return (
          <div key={product.id} className="product">
            <ProductCard product={product} />
          </div>
        );
      })}
    </>
  );
}
