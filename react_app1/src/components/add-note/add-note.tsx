import "./add-note.css"
function AddNote(){
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.style)
  }  
    return(
        <div>
        <form className="add-note">
            <input type="text" onChange={handleChange} />
            <button>Add</button>
        </form>
    </div>
    )
}
export default AddNote