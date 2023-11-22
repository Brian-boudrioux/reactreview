import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function Home() {

  const { products } = useLoaderData();
  const [search, setSearch] = useState("");

  return (
    <main>
      <h1>Home page</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryList />
      <ProductList products={products} search={search} />
    </main>
  );
}

export default Home;
