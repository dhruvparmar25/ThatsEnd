import React from "react";
import "../src/App.css";
import Propes from "./components/Propes";
import Profile from "./components/Profile";
import PropButton from "./components/PropButton";
import CartParent from "./components/CartParent";
import State from "./components/State";
import GalleryState from "./components/GalleryState";
import ConditionaRendaring from "./components/ConditionaRendaring";

function App() {
  return (
    <>
      <Profile />
      <PropButton />
      <CartParent />
      <State />
      <GalleryState />
      <ConditionaRendaring/>
    </>
  );
}

export default App;
