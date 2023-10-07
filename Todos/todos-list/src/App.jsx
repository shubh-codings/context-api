
import { useState , useEffect} from 'react'
import './App.css'
import AddNotes from './components/AddNotes'
import Note from './components/Note'
import { NoteProvider } from './context/NoteContext'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')))
  const addNote = (note) => {
    setNotes((prev) => [...prev,{id:Date.now(), ...note }])
  }
  const updateNote = (id, note) => {
    setNotes((prev) => prev.map(
      (prevNote) => (prevNote.id === id ? note : prevNote)))
  }
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    if (notes && notes.length>=0){
      setNotes(notes)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])
  

  return (
    <NoteProvider value={{ notes, addNote, deleteNote, updateNote }}>
      <div className='container d-flex flex-column vw-100 align-items-center p-4 justify-content-center'>
        <AddNotes/>
      <div className='Notes w-100 border border-info d-flex flex-column justify-content-center p-5 my-3'>
        <h2>Your Notes are Displayed Here</h2>
        {notes.map((note)=>(
          <div key = {note.id} className='d-flex'>
              <Note note={note}/>
          </div>
        ))}
        </div>

    </div>
    </NoteProvider>
  )
}

export default App
