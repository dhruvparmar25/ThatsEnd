import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
      <p>Current Value: {name}</p>
    </form>
  );
}

export default ControlledInput;
