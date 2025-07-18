import React from "react";

function TernaryOperator() {
  const isLoggedin = false;
  const products = [
    {
      name: "iphone 16",
      stok: true,
    },
    {
      name: "Samsung S25",
      stok: false,
    },
  ];
  return (
    <>
      <h2 className="font-bold">Ternary Operator</h2>
      <li>{isLoggedin ? "Welocme Home Page" : "Please Login"}</li>
      <ul>
        {products.map((product, i) => (
          <li key={i}>

            {product.name}-{product.stok ? "In stoke" : " out of stoke"}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TernaryOperator;
