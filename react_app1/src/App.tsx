import React, { useState } from 'react';
import './App.css';
import Note from "./components/note/note";
import {Notes} from './components/note/data'
import AddNote from './components/add-note/add-note'
function App() {
  const [notes , setNotes]=useState(Notes);

  return (
    <div className='App'>
     <h2>Notes App</h2>
     <AddNote></AddNote>
     {notes.map(
      note=><Note key={note.id} priority={note.priority} text={note.text}></Note>
     )}
     
    </div> 
  );
}  

export default App;
