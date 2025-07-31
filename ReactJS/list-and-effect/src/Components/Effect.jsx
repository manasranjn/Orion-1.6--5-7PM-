import React, { useEffect, useState } from "react";

const Effect = () => {
  const [products, setProducts] = useState([]);
  const val = 100;

  const getProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  //   getProducts();

  useEffect(() => {
    getProducts();
  }, [val]);
  return (
    <div>
      {products.map((product) => (
        <div>
          <h1>{product.title}</h1>
          {product.images.map((image) => (
            <img src={image} alt="" width={"100px"} />
          ))}
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Effect;
