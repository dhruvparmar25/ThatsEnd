import React from "react";
const style = {
  cartchild: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    backgroundColor: "#f9f9f9",
  },
};
function CartChild({ children }) {
  return (
    <>
      <div style={style.cartchild}>
        {children}
      </div>
    </>
  );
}

export default CartChild;
