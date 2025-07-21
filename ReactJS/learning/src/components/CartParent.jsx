import React from "react";
import CartChild from "./CartChild";

function CartParent() {
  return (
    <>
      <h1>Example 4:Using Children Prop</h1>
      <CartChild>
        <h2>Card title </h2>
        <p>This is some text inside the card.</p>
      </CartChild>
      <CartChild>
        <img src="https://images.unsplash.com/photo-1752408494691-a254a06a7eba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="sample" width={100} height={100} style={{borderRadius:"8px"}} />
        <p>Image Inside The Card Component.</p>
      </CartChild>
    </>
  );
}

export default CartParent;
