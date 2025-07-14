import React from "react";

function PropsInReact(props) {
  console.log(props);

  return (
    <div>
      <h1 className="font-bold">Props in React</h1>
      <li>{props.empName}</li>
    </div>
  );
}

export default PropsInReact;
