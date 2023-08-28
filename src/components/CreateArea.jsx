import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  })

  function handleNote(event) {
    const {name, value} = event.target;
    setInputNote((prevValue) => ({
      ...prevValue,
      [name] : value
    }))
  }

  return (
    <div>
      <form>
        <input onChange={handleNote} name="title" placeholder="Title" value={inputNote.title}/>
        <textarea onChange={handleNote} name="content" placeholder="Take a note..." rows="3" value={inputNote.content}/>
        <button onClick={(event) => {
          props.onAdd(inputNote);
          setInputNote({
            title:"",
            content:""
          });
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
