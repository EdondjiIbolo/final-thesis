import axios from "axios";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMovies = async () => {
      const url = `http://localhost:3000/products`;
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        const results = await data;
        setProducts(results);
        console.log(results);
        return results;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  return { products, loading };
}
