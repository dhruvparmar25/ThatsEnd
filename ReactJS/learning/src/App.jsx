import React from "react";
import "../src/App.css";
import UseState from "./components/UseState";
import Updateobj from "./components/Updateobj";
import Form from "./components/Form";
import ResEvent from "./components/Responding/ResEvent";
import UpdatingArray from "./components/UpdatingArray";
// import Propes from "./components/Propes";
// import Profile from "./components/Profile";
// import PropButton from "./components/PropButton";
// import CartParent from "./components/CartParent";
// import State from "./components/State";
// import GalleryState from "./components/GalleryState";
// import ConditionaRendaring from "./components/ConditionaRendaring";

function App() {
  return (
    <>
      {/* <Profile />
      <PropButton />
      <CartParent />
      <State />
      <GalleryState />
      <UseState/>
      <Updateobj/>
      <ConditionaRendaring/> 
       <Form />      <ResEvent />*/}
      <UpdatingArray />
    </>
  );
}

export default App;
