import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: name,
      price: price,
    };

    try {
      const response = await fetch("https://fakestoreapi.com/productS", {
        method: "POST", // POST request
        headers: {
          "Content-Type": "application/json", // batata hai ki JSON bhej rahe hain
        },
        body: JSON.stringify(newProduct), // object ko string me convert karna
      });

      const data = await response.json();
      console.log("Product Added Successfully:", data);
      alert("Product Added Successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
