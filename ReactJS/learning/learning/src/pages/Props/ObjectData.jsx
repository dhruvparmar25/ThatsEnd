import React from "react";

function ObjectData({ user }) {
  return (
    <div>
      <h1 className="font-bold"> Objects and Props</h1>
      <li>Name : {user.name}</li>
      <li>Salary : {user.salary}</li>
      <li>age : {user.age}</li>
      <li>Emial : {user.email}</li>
      <hr />
    </div>
  );
}

export default ObjectData;
