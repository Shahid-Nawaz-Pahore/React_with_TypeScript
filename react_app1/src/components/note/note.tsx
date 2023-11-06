//function component
import   "./note.css";
import {noteProp} from './note-type'
function Note(props:noteProp){
    return(
        <div className={`note ${props.priority}`}>
        {props.text}

        </div>
    )
}

export default Note;