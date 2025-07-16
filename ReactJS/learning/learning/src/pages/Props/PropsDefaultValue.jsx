import React from "react";

function PropsDefaultValue({userName="Guest User"}) {
    console.log("userName",{userName});
    
  return (
    <div>
      <h1 className="font-bold">PropsDefaultValue</h1>
      <li>hello : {userName}</li>
      <hr />
    </div>
  );
}

export default PropsDefaultValue;
