import { useRef } from "react";

function UncontrolledInput() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Component</h2>
      <input type="text" ref={nameRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
