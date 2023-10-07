import { useNote } from '../context/NoteContext'
import { useState } from 'react';

export default function Note({ note }) {
    const [isNoteEditable, setisNoteEditable] = useState(false);
    const [noteText, setnoteText] = useState(note.note)
    const { updateNote, deleteNote } = useNote();

    const editNote = () => {
        updateNote(note.id, { ...note, note: noteText })
        setisNoteEditable(false)
    }

    return (
        <>
<input type="text"
                className={`form-control border
        ${isNoteEditable ? 'border-danger' : 'border-info'}`}
                value={noteText}
                onChange={(e) => setnoteText(e.target.value)}
                readOnly={!isNoteEditable}
            />
            <button className="btn btn-info border border-success" type="button" 
            id="updateNote"
            onClick={()=>{
                if(isNoteEditable){
                    editNote();
                }else setisNoteEditable((prev)=>!prev)
            }}
            >{isNoteEditable ? 'Save' : 'Update'}</button>
            <button className="btn btn-danger border border-danger" type="button" id="deleteNote"
            onClick={()=>deleteNote(note.id)}>Delete</button>
</>
    )
}
