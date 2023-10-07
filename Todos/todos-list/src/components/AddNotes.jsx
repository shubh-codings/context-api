import { useState } from "react"
import { useNote } from "../context/NoteContext"

export default function AddNotes() {
     const [note,setNote] = useState('')
     const {addNote} = useNote()
     const add = (e)=>{
        e.preventDefault();
        if(!note) return
        addNote({note})
        setNote('')
     }
    return (
        <div className='addNotes container border border-info d-flex justify-content-center align-items-center p-5 my-3'>
            <form onSubmit={add} className="input-group mb-3">
                <input type="text" className="form-control border border-success" placeholder="Add a Note" aria-label="add-note" aria-describedby="button-addon2" value={note}
                onChange={(e)=>setNote(e.target.value)}/>
                <button className="btn btn-success border border-success" type="button" id="button-addon2" onClick={add}>Add</button>
            </form>
        </div>
    )
}
