import React from "react";
function Button1({  children, onSmash }) {
  return( 
    <button className="ml-3" onClick={onSmash}>{children}</button>
  )
}
function Button({ onClick, children }) {
  return <button className="ml-3" onClick={onClick}>{children}</button>;
}
function PlayButton({ movieName }) {
  function handlePlayClick(){
    alert(`Playing  ${movieName}!`)
  }
  return <Button onClick={handlePlayClick}>
   Play "{movieName}"
  </Button>;
}
function UploadButton(){
  return(
    <Button onClick={()=>alert('Uploading')}>
      Upload Image
    </Button>
  )
}
function AlertButton({ message, children }) {
  return (
    <button className="ml-3" onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function ResEvent() {
  return (
    <div className="text-center">
      <h1>Reading props in event handlers</h1>
      <AlertButton message="Playing!!">Play Movie</AlertButton>
      <AlertButton message="Uploading!!">Upload Image</AlertButton>
      <h1>Passing event handlers as props</h1>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton/>
      <h1>Naming event handler props</h1>
      <Button1 onSmash={()=>alert('Playing')}>Play Movie</Button1>
       <Button1 onSmash={()=>alert('Uploading')}>Upload  Image</Button1>
       <h1>Event propagation</h1>
       <button onClick={()=>alert('Playing')}>Pla</button>
    </div>
  );
}

export default ResEvent;
