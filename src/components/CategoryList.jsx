import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, []);

  return (
    <>
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`}>
          <button>{category}</button>
        </Link>
      ))}
    </>
  );
}

export default CategoryList;