import React from "react";
// Button function
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
//Toolbar Function
function Toolbar({ onUploadImage, onPlayMovie }) {
  return (
    <>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </>
  );
}
//State Component 
export default function State() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}
