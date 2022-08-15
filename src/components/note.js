import React from 'react'
import '../styles/Note.css'

function Note(props){
    const { id, user, title } = props;

    return (
        <div className='note'>
            <a className='note-title' href={`http://localhost:3000/note/${id}`}>{title}</a>
            <div className='note-credit'>By: {user}</div>
        </div>
    )
}

export default Note