import { createContext,useContext } from "react";

export const NoteContext = createContext({
    notes:[
        {
            id:Date.now,
            note:"Your Note",

        } 
    ],
    addNote:(note)=>{},
    updateNote:(id,note)=>{},
    deleteNote:(id)=>{}
})

export const useNote = ()=>{
    return useContext(NoteContext)
}

export const NoteProvider = NoteContext.Provider