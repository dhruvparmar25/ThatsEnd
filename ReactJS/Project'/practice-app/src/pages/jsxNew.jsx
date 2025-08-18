import React from "react";
 const Jsxnew =()=>{
 let str = "My Car Color is Red.";
 let a=12;
 let b=10;
 const c=a+b
 let str2 ="Car brand is Hyundai";
 let MainStr = str + " "+str2
 let val ="Jai shree krishna"
 const myval =<h1>Learn React</h1>

 const list =(
    <ul>
        <li>Coffie</li>
        <li>Tea</li>
        <li>Sugar</li>
    </ul>
 )

  const mylist =(
    <div>
        <p>This is my paragraph.</p>
        <p>This is paragraph has so many show cases.</p>
    </div>
 )

 const Arr1 = ["mango","strawberry","cherry","apple"];
 const Arr2 = ["litchi","watermelon"]
 const MainArr =[...Arr1,...Arr2]
 console.log(MainArr)
 
 const m1 = Arr1[0];
 const m2 = Arr1[1];
 const m3 = Arr1[2];
 const m4 = Arr1[3];


 const [p1,...p3] = Arr1
 console.log(p1);
 console.log(p3);

 const objSudent = {
    name:"priya",
    sub:"english",
    marks:"99"
 }

 let myValue = React.createElement("p", { id: "jsx",className:"txt" }, "This is JSX");


    return(
        <>
        <h1>Learn about Jsx</h1>
        <h2>{str + ": "+c}</h2>
        <h2>{c}</h2>
        <p>{MainStr}</p>
        <h3>Hello Good morning.... {val}</h3>
        {myval}
        {list}
        {mylist}
        <h1>{Arr1[2]}</h1>
        <h2>My name is {objSudent.name}.my favourite subject is {objSudent.sub}. I have got {objSudent.marks} in english.</h2>
        {myValue}


        



        </>
    )
} 


/* function Jsxnew(){
    return(
        <h1>Learn about Jsx</h1>
    ) 
}   */  
export default Jsxnew