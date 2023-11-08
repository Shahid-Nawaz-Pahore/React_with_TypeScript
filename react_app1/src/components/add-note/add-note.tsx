import { useState } from "react"
import "./add-note.css"
import {NoteType, priorityType} from "../note/note-type"
import {v4 as uuidv4} from "uuid"

type addNoteProp={
  addNote: (note: NoteType) => void
}

function AddNote(props:addNoteProp){
   
    const [text , setText] = useState("");
    // const defaltPriority:"low"|"high"|"medium"="low";
    const[priority , setPriority]=useState<priorityType>("low")
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }  

  const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    props.addNote({
      text,
      priority,
      id:uuidv4(),
    })
    setText("")
    setPriority("low");
  }


  const handleSelect=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setPriority(e.target.value as priorityType);
}

    return(
        <div>
        <form className="add-note">
            <input type="text" onChange={handleChange}  value={text}/>
            <select onChange={handleSelect} value={priority}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
    )
}
export default AddNote