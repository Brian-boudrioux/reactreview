import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, []);

  return (
    <>
      {product && (
        <>
          <h3>{product.title}</h3>
          <img src={product.images[0]} />
        </>
      )}
    </>
  );
}

export default ProductDetails;
