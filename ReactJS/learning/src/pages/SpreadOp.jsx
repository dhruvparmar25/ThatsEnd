import React from "react";

function SpreadOp() {
  const Arr1 = ["D", "H", "R"];
  const Arr2 = ["U", "V"];
  const Merge = [...Arr1, ...Arr2].join("");

  const ob1 = {
    name: "Dhruv",
    city: "Navsari",
    age: 21,
  };

  const ob2 = {
    class: 10,
    dob: "12-2-2121",
  };

  const Objmerge = {
    ...ob1,
    ...ob2,
  };
  console.log("Object merge ", Objmerge);

  const { name, city, dob } = Objmerge;
  console.log(name, city, dob);

  return (
    <>
      <div className="font-bold">Spread Operator :- </div>
      <li>{"Array Merge : " + Merge}</li>
      <li>{"Object merge : Console"}</li>
    </>
  );
}

export default SpreadOp;
