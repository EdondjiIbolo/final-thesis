import { useProducts } from "../Hooks/useProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Products } from "./Products";

export function Home() {
  const { products } = useProducts();
  const productos = products.all_products;
  return (
    <>
      <Header />

      <main className="product-card__container max-w-[1280px] mx-auto">
        <Products collection={productos} />
      </main>
      <Footer />
    </>
  );
}
