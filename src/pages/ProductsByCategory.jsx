import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductsByCategories() {
  const { products } = useLoaderData();

  return (
    <main>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}

export default ProductsByCategories;