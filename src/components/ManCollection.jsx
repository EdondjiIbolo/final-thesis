import { useProducts } from "../Hooks/useProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Products } from "./Products";

export function ManCollection() {
  const { products } = useProducts();
  const productos = products.all_products;
  const manCollection = productos?.filter((item) => item.category === "men");
  console.log(manCollection);
  return (
    <>
      <Header />
      <main className="product-card__container max-w-[1280px] mx-auto">
        <Products collection={manCollection} />
      </main>
      <Footer />
    </>
  );
}
