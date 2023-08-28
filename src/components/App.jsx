import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notesArr, setNotesArr] = useState([]);

  function addNote(inputNote) {
    setNotesArr((prevValue) => {
      return [...prevValue, inputNote]
    })
  }

  function deleteNote(id){
    setNotesArr(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id
      });
    });
  }

  return <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    {notesArr.map((note, index) => (
      <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
    ))}
    <Footer />
  </div>
}

export default App;