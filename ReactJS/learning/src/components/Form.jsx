import React, { useState } from 'react';

export function Form() {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  })

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (
    <form >
      <div>
        <label htmlFor="title"></label>
        <input style={{color:"black"}}
          value={addData.title}
          onChange={handelChange}
          type="text"
          name="title"
          id="title"
          autoComplete='off'
          placeholder="Add Title" />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input value={addData.body} onChange={handelChange} type="text" name="body" id="body" placeholder="Add Post" />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}


