import { useProducts } from "../Hooks/useProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Products } from "./Products";

export function WomenCollection() {
  const { products } = useProducts();
  const productos = products.all_products;
  const womenCollection = productos?.filter(
    (item) => item.category === "women"
  );

  return (
    <>
      <Header />
      <main className="product-card__container max-w-[1280px] mx-auto">
        <Products collection={womenCollection} />
      </main>
      <Footer />
    </>
  );
}
