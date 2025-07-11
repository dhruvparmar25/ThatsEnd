import "./App.css";
import ArrayFun from "./pages/ArrayFun";
import Destructuring from "./pages/Destructuring";
import SpreadOp from "./pages/SpreadOp";
import TernaryOperator from "./pages/TernaryOperator";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        React-Js Learning
      </h1>
      <div className="pl-10">
      <ArrayFun/>
      <SpreadOp/>
      <Destructuring/>
      <TernaryOperator/>
      </div>
    </>
  );
}

export default App;
