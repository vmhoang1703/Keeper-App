import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });
  
  const [isClicked, setIsClicked] = useState(false);

  function handleNote(event) {
    const {name, value} = event.target;
    setInputNote((prevValue) => ({
      ...prevValue,
      [name] : value
    }))
  }

  function handleClick() {
    setIsClicked(true);
  }



  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input onChange={handleNote}  name="title" placeholder="Title" value={inputNote.title}/>
        )}
        <textarea onChange={handleNote} onClick={handleClick} name="content" placeholder="Take a note..." rows={isClicked ? "3" : "1"} value={inputNote.content}/>
        <Zoom in={isClicked}>
          <Fab color="primary" aria-label="add" onClick={(event) => {
            props.onAdd(inputNote);
            setInputNote({
              title:"",
              content:""
            });
            event.preventDefault();
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
