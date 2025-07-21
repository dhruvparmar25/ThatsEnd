import React, { useState } from "react";
import "./data";
import { sculptureList } from "./data";

function GalleryState() {
  const [index, setIndex] = useState(0);
  function handelClick() {
    setIndex(index + 1);
  }
  let sculpture = sculptureList[index];

  return (
    <>
      <h2 className="font-bold">
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3 className=" from-orange-700">
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
      <button onClick={handelClick}> next </button>
    </>
  );
}

export default GalleryState;
