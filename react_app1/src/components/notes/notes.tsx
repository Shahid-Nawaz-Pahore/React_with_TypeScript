//function component
import   "./notes.css";
type noteProp ={
    text:string,
    priority?:'high' | 'medium' | 'low'
}
function Note(props:noteProp){
    return(
        <div className={`note ${props.priority}`}>
        {props.text}

        </div>
    )
}

export default Note;