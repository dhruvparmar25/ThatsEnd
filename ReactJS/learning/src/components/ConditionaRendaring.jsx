import React from "react";
import ChildRender from "./ChildRender";

function ConditionaRendaring() {
  return (
    <>
      <div>ConditionaRendaring</div>
      <ChildRender ispack={true} item={"food Item like roti and sabjki"} />
    </>
  );
}

export default ConditionaRendaring;
