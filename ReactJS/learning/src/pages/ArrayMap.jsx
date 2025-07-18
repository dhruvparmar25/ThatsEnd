import React from "react";

function ArrayMap() {
  const myArray = ["apple", "banana", "orange"];
  const number = [2, 3, 54, 12, 21];

  const mul = number.map((num) => num * 2);
  const myList = myArray.map((index,i) => <li key={i}>{ index}</li>);

  const peoples = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const list = peoples.map((people) => (
    <li key={people.id}>
      {people.name} <span className="font-bold"> ({people.profession})</span>
    </li>
  ));
  return (
    <>
      <h2 className="font-bold"> Map Method</h2>
      <h3>Array Map Method</h3>
      {myList}
      <li>{" " + mul}</li>
      <h3>Object Map Method</h3>
      {list}
    </>
  );
}

export default ArrayMap;
