import React from "react";
function UserCard({ name, email, loction }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{loction}</h3>
    </>
  );
}

function Profile() {
  return (
    <>
      <UserCard name={"jay"} email={"jay@gmail.com"} loction={"India"} />
    </>
  );
}

export default Profile;
