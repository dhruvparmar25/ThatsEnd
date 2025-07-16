import React from "react";

function PassJsxToProps({children}) {
  return (
    <>      <h1 className="font-bold">Pass Jsx With Props</h1>

       <div className="text-green-500">
      {children}
    </div>
    </>
 
  );
}

export default PassJsxToProps;
