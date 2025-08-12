import React from "react";
import "../src/App.css";
import UseState from "./components/UseState";
import Updateobj from "./components/Updateobj";
import Form from "./components/Form";
import ResEvent from "./components/Responding/ResEvent";
import UpdatingArray from "./components/UpdatingArray";
import Managing from "./components/useState/Managing";
import State from "./pages/State";
import UseEffect from "./pages/UseEffect";
import ScrollImg from "./pages/useRef/ScrollImg";
import VideoPlayer from "./pages/useRef/VideoPlayer";
import UseMemo from "./pages/UseMemo.jsx/UseMemo";

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
      <Form />
      <ResEvent />
      <UpdatingArray /> 
      <Managing/>
      <State/>
      <UseEffect/>
      <Useref/>
      <Stopwatch/>
      <ScrollImg/>
      <VideoPlayer/>

*/}
<UseMemo/>
    </>
  );
}

export default App;
