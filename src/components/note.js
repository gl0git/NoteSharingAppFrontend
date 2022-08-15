import React from 'react'
import '../styles/Note.css'

function Note(props){
    const { id, user, title } = props;

    return (
        <div className='note'>
            <a className='note-title' href={`https://gl0git.github.io/NoteSharingAppFrontend/#/note/${id}`}>{title}</a>
            <div className='note-credit'>By: {user}</div>
        </div>
    )
}

export default Note