import React, { useState } from "react";

function Control() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [email, setEmail] = useState("");
//   const ClearData = () => {
//     setName("");
//     setEmail("");
//     setPass("");
//   };
  return (
    <>
      <h1>Controlled Component</h1>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <br /> <br />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter Your Password"
        />
        <br /> <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <br /> <br />
        <button>Submit</button>{" "}
        <button type="button" onClick={()=>{setName('');setEmail('');setPass('');}}>Clear</button>
        <h2>{name}</h2>
        <h2>{pass}</h2>
        <h2>{email}</h2>
      </form>
    </>
  );
}

export default Control;
