import React from "react";
import { useImmer } from "use-immer";

function Updateobj() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function handleNameChnage(e){
    updatePerson(draft=>{
draft.name=e.target.value
        
    });
  }
   function handleTtleChnage(e){
    updatePerson(draft=>{
       draft.artwork.title=e.target.value
    });
  }
  function handleCityChnage(e){
    updatePerson(draft=>{
       draft.artwork.city=e.target.value
    });
  }
  function handleImageChnage(e){
   updatePerson(draft=>{
       draft.artwork.image=e.target.value
    });
  }
  return (
    <>
      <section>
        <h1 className="text-center font-bold text-2xl ">
          Updating objects in state{" "}
        </h1>
  
          <label>Name:
          <input value={person.name}
          onChange={handleNameChnage} /></label>
          <br /> <br />
          <label>Title:</label>
          <input value={person.artwork.title}
          onChange={handleTtleChnage} />
          <br /> <br />
          <label>City:</label>
          <input value={person.artwork.city}
          onChange={handleCityChnage}  />
          <br /> <br />
          <label>Image:</label>
          <input value={person.artwork.image}
          onChange={handleImageChnage}  />
          <br /> <br />
          <p><i>{person.artwork.title}</i>{' by '}{person.name} <br />(located in {person.artwork.city})</p>
          <img src={person.artwork.image}  />
    
      </section>
    </>
  );
}

export default Updateobj;
