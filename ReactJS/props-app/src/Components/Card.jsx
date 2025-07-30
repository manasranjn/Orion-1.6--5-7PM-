import React from "react";

const Card = ({ name, price, rating }) => {
  //   console.log(a);

  //   const obj = {
  //     name: "ABCD",
  //     price: 20,
  //     rating: 4.5,
  //   };
  //   const { name, price, rating } = obj;
  //   console.log(name);
  //   console.log(price);
  //   console.log(rating);

  //   const arr = [1, 2, 3, 4, 5];
  //   const [a, b, c, d, e] = arr;
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        backgroundColor: "lightblue",
      }}
    >
      {/* <h2>Name: {a.name}</h2>
      <h2>Price: {a.price}</h2>
      <h3>Rating: {a.rating}</h3> */}
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
      <h3>Rating: {rating}</h3>
    </div>
  );
};

export default Card;
