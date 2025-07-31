import React from "react";

const List = () => {
  const data = [
    {
      name: "Laptop",
      price: 40000,
      rating: 4.6,
    },
    {
      name: "Moble",
      price: 25000,
      rating: 4.4,
    },
    {
      name: "Camera",
      price: 55000,
      rating: 4.7,
    },
    {
      name: "Watch",
      price: 4000,
      rating: 4.6,
    },
  ];

  return (
    <div>
      <h1>List of Data </h1>
      {data.map((product, index) => (
        <div
          style={{
            padding: "10px",
            backgroundColor: "blueviolet",
            margin: "10px",
          }}
          key={index}
        >
          <h1>Name: {product.name}</h1>
          <h2>Price: {product.price}</h2>
          <h2>Ratings: {product.rating}</h2>
        </div>
      ))}
    </div>
  );
};

export default List;
