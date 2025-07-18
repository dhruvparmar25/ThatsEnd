import React from "react";
import "../App.css";

function Welcome({name,person,age}){
    console.log(name,person,age );
    
    return <h1>Hello,{name}age is {age}qqqq {person.name}</h1>
}

function Propes() {
  return (
    <>
      <div className="title">Props</div>
     <Welcome   name={"Dhruv"} age={12} person={{
        name:'Dhruv Parmar',
        DOB:'12-3-2203'
        }}/>

    </>
  );
}

export default Propes;
