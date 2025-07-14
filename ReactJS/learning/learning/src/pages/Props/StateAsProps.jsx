import React from "react";

function StateAsProps(std) {
    console.log("stae",std.std);
    
  return (
    <>
      <h1 className="font-bold">StateAsProps</h1>
      <li>{std.std}</li>
    </>
  );
}

export default StateAsProps;
