import React from "react";

function ArrayFun() {
  const HandelClick = () => {
    alert("Array Function Example");
  };

  return (
    <div >
      <h2 className="font-bold"> Arrow Function :-</h2>
      <li>
        <button className="border rounded-xl p-1" onClick={HandelClick}>
          Array Fun
        </button>
      </li>
    </div>
  );
}

export default ArrayFun;
