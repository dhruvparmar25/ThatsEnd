import React from "react";


function Test() {
  // Q-1 Take a three array and merge all using spread operator.
  const var1 = [1, 2, 3];
  const var2 = [4, 5, 6];
  const var3 = [7, 8, 9];
  const mrgVar = [...var1, ...var2, ...var3];
  // Q-2 Make a arrow function which return multiplication of three numbres.
  const mul = (a, b, c) => {
    return a * b * c;
  };
  const ans = mul(20, 100, 22);
  //Q-3 Take a two objects and merge it after that using that merge object preapre one message and show that message in display
  const obj1 = {
    name: "Dhruv",
    rollNum: 100,
  };
  const obj2 = {
    dob: "25-02-2003",
    address: "Navsari",
  };
  const mrgObj = { ...obj1, ...obj2 };
  // Q-4 Take a variable which has initial string like "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  // display one button name UpdateText
  // when click on button display alert with string which is using same initail declared variable and display text "Lorem Ipsum has been the industry in 100 city"
  // here in string whole 100 number which is you have to display dynamically using jsx
let myString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

 const cityCount = 100;

  const handleUpdateClick = () => {
    // Update the plain JavaScript variable
    myString = `Lorem Ipsum has been the industry in ${cityCount} city`;

    // The alert will show the updated value of myString
    alert(myString);
  };

  //Q-5 Using createElement method display one message in h1 tag also apply color on that tag.
  var CeMsg = React.createElement(
    "h1",
    { style: { color: "black" } },
    "Using createElement method display one message "
  );
  //Q-6 you have to merging this two array ,filtering by age ,display data which has age is greaterthan 20 and render it.
  const persons = [
    { id: 6, name: "christoph", age: 32, number: "555-555-5555" },
    { id: 7, name: "debra", age: 31, number: "777-777-777" },
    { id: 8, name: "eric", age: 12, number: "888-888-888" },
    { id: 9, name: "richard", age: 20, number: "999-999-999" },
    { id: 10, name: "santiago", age: 25, number: "(555)555-5555" },
  ];
  const student = [
    { id: 1, name: "radha", age: 12, number: "111-111-111" },
    { id: 2, name: "krishna", age: 15, number: "222-222-222" },
    { id: 3, name: "sita", age: 17, number: "444-444-444" },
    { id: 4, name: "ram", age: 12, number: "666-666-666" },
    { id: 5, name: "hanuman", age: 35, number: "(555)555-5555" },
  ];
  const marging = [...student, ...persons];
  console.log(marging);
  const filter = marging.filter((item) => item.age > 20);
  console.log(filter);
  //Q-7 a) What is the value of newNumbers after this code runs?
  // b) How can you use the spread operator in React state to add an item to an array?
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [...numbers, 4];
  //   Q-8 a) Rewrite this arrow function as a regular function.
  // b) What does the function return when called with 'Alice'?
  const greet = (name) => `Hello, ${name}!`;
  console.log(greet("Alice"));
  function greet1(name) {
    return `Hello, ${name}`;
  }
  const greetFun = greet1("Dhruv");
  //Q-9a) What will the component display if isOnline is true?
  // b) How would you rewrite this using an if-else statement instead of a ternary operator?
  let message;
  function Status({ isOnline }) {
    return <p>{isOnline ? "User is online" : "User is offline"}</p>;
  }
  function Status1(isOnline1) {
    if (isOnline1 === true) {
      message = "User is online";
    } else {
      message = "User is Offline";
    }
    return <h2>{message}</h2>;
  }
  return (
    <>
      <h2>Q-1 Take a three array and merge all using spread operator.</h2>
      <h4>Merge Array:-{mrgVar}</h4>
      <h2>
        Q-2 Make a arrow function which return multiplication of three numbres.
      </h2>
      <h4>Multiplication : {ans} </h4>
      <h2>
        Q-3 Take a two objects and merge it after that using that merge object
        preapre one message and show that message in display
      </h2>
      <h4>
        My Name is {mrgObj.name}.I am From {mrgObj.address}.My Birth of date{" "}
        {mrgObj.dob}.My Roll Number is {mrgObj.rollNum}
      </h4>
      <h2>
        Q-4 Take a variable which has initial string like "Lorem Ipsum is simply
        dummy text of the printing and typesetting industry." display one button
        name UpdateText when click on button display alert with string which is
        using same initail declared variable and display text "Lorem Ipsum has
        been the industry in 100 city" here in string whole 100 number which is
        you have to display dynamically using jsx
      </h2>
      <h4>
        <p>{myString}</p>
        <button onClick={handleUpdateClick}>Update Text</button>
      </h4>
      <h2>
        Q-5 Using createElement method display one message in h1 tag also apply
        color on that tag.
      </h2>
      <h4>{CeMsg}</h4>
      <h2>
        Q-6 you have to merging this two array ,filtering by age ,display data
        which has age is greaterthan 20 and render it.
      </h2>
      <h4>
        {filter.map((person) => (
          <li key={person.id}>
            {person.name}-Age:{person.age}-Number:{person.number}
          </li>
        ))}
      </h4>
      <h2>
        Q-7 (a) What is the value of newNumbers after this code runs? (b) How
        can you use the spread operator in React state to add an item to an
        array?
      </h2>
      <h4>
        a-ans {newNumbers} <br />
        b-ans
      </h4>
      <h2>
        Q-8 (a) Rewrite this arrow function as a regular function. (b) What does
        the function return when called with 'Alice'?
      </h2>
      <h4>
        A-ans {greetFun} <br />
        B-ans {greet("Alice")}
      </h4>
      <h2>
        Q-9(a) What will the component display if isOnline is true? (b) How
        would you rewrite this using an if-else statement instead of a ternary
        operator?
      </h2>
      <h4>
        State Check
        <Status isOnline={true} />
        <Status isOnline={false} />
        IF Else State Check
        <Status1 isOnline1={true} />
        <Status1 isOnline1={false} />
      </h4>
    </>
  );
}

export default Test;
