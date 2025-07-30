import React from "react";
import Card from "./Components/Card";
import PropsComponent from "./Components/PropsComponent";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      {/* <Card name="Laptop" price="20000" rating="4.5" />
      <Card name="Mobile" price="10000" rating="4.3" />
      <Card name="Tablet" price="15000" rating="4.2" />
      <Card name="Watch" price="5000" rating="4.1" />
      <Card name="Camera" price="30000" rating="4.4" />
      <Card name="Headphones" price="2000" rating="4.0" /> */}
      {/* <PropsComponent data={{ name: "Laptop", price: 20000, rating: 4.5 }} />
      <PropsComponent data={[1, 2, 3, 4, 5]} /> */}

      <Counter />
    </div>
  );
};
export default App;
