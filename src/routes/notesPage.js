import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Note from '../components/note'
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Note.css'

function NotesPage() {

  const [User, setUser] = useState()
  const {university, course} = useParams()
  const [Notes, setNotes] = useState([])

  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch(`https://shrouded-everglades-43691.herokuapp.com/authenticate`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(responseJSON => setUser(responseJSON.user.name))
  }, [])


  useEffect(() => {
      fetch(`https://shrouded-everglades-43691.herokuapp.com/notes/${course}/${university}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
    })
    .then(response => response.json())
    .then(responseJSON => setNotes(responseJSON.notes))
  }, []) 

  return (
    <div className="notesPage">
      <Navbar user={User}/>
      <div className='notepage-content-section'>
      <h1 className='notepage-title'>{`${course} Notes`}</h1>
      <button className=' add-note-button btn btn-primary' onClick={(e) => {
            window.location.href = `http://localhost:3000/newnote/${university}`
            }}>Add new note</button>
      <div className='notes-container'>
        {Notes?.map((note, index) => {
          return (
              <Note key={note._id} id={note._id} user={note.user} title={note.title} />
          )
        })}
      </div>
      </div>
    </div>
  );
}

export default NotesPage;