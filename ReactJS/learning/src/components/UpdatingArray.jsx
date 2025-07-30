import React, { useState } from "react";
  let nextId =0;

function UpdatingArray() {
  const [PackList, setPackList] = useState([]);
  const [inputVal, setInputVal] = useState("");

// const [nextId, setNextId] = useState(0);

// const handelAdd = () => {
//   setPackList([...PackList, { id: nextId, name: inputVal }]);
//   setNextId(nextId + 1);
//   setInputVal("");
//   console.log(PackList);
  
// };

  const handelRemove = (itemId) => {
    const fltrvalue = PackList.filter((a) => a.id !== itemId);
    setPackList(fltrvalue);
  };

  const handelAdd = () => {
  if (inputVal.trim() === "") return; 
    setPackList([...PackList, { id: nextId++, name: inputVal }]);
    alert("Item Added   ")
    setInputVal("");
  };

  const handelChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <h1 className="text-center">Updateing Array</h1>
      <div className="text-center">
        <input required value={inputVal} onChange={handelChange} />
        <button onClick={handelAdd}>ADD</button>
      </div>

      <ul className="text-center">
        {PackList.map((item) => {
          return (
            <div key={item.id} className="flex flex-row justify-center  text-center">
              <li >{item.name}</li>
              <button onClick={()=>handelRemove(item.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </> 
  );
}

export default UpdatingArray;
