import ProductCard from "./ProductCard";
import './productList.css';

function ProductList({ products, search }) {
  console.log(products);
  return (
  <section className="products-list">
    {
      products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    }
  </section>
  );
}

export default ProductList;
