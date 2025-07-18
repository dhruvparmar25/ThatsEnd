import React, { useEffect, useRef } from "react";

function Destructuring() {
  const vehicles = ["mustang", "f-150", "expedition"];
  const [car, truck, suv] = vehicles;

  const vehicalOne = {
    brand: "Ford",
    model: "Mustang",
    type: "Car",
    year: 2021,
    color: "red"
  };

  const objCar = {
    name: "Audi",
    color: "black",
    price: "1000000",
    hobby: "driving"
  };

  const demoRef = useRef(null);

  useEffect(() => {
    myVehicle(vehicalOne);
  }, []);

  function myVehicle({ type, color, brand, model }) {
    const message =
      "My " + type + " is a " + color + " " + brand + " " + model + ".";
    if (demoRef.current) {
      demoRef.current.innerHTML = message;
    }
  }

  return (
    <>
      <h2 className="font-bold">Destructuring Example:</h2>

      <h3>Array Destructuring</h3>
 
        <li>car Name - {car}</li>
        <li>Truck - {truck}</li>
        <li>suv - {suv}</li>
   

      <h3>Object Destructuring</h3>
 
        <li ref={demoRef}></li>
   

      <h3>Object Keys Mapping</h3>
 
        {Object.keys(objCar).map((item) => (
          <li key={item}>{item} = {objCar[item]}</li>
        ))}
   
    </>
  );
}

export default Destructuring;
