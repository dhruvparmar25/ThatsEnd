import React, { useState } from "react";

function UseState() {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Headphones", price: 3000 },
    ];

    const AddToCart = (product) => {
        console.log("product", product);
        setCart((prevCart) => {
            console.log("prevCart", prevCart);
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, qty: 1 }];
            }
        });
    };

    const decreaseQty = (id)=>{
        setCart((prevCart)=>
        prevCart.map((item)=>))
    }


    return (

        <div>
            <h2>
                Products
            </h2>
            {products.map((p) => (
                <li key={p.id}>
                    {p.name}-{p.price}
                    <button onClick={() => AddToCart(p)}>Add To Cart</button>
                </li>
            ))}
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id}>
                        {item.name}-qty:{item.qty}-Tota:${item.qty * item.price}
                        <button onClick={() => AddToCart(item)}>+</button>
                        <button>Remove</button>
                    </div>
                ))
            )
            }
        </div>)
}

export default UseState;
