import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'


function NoteSubmit() {

    let {university} = useParams()

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [user, setUser] = useState()
    const [course, setCourse] = useState()
    const [formDisabled, setFormDisabled] = useState(true)

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

    const checkValidUser = (e) => {
        if (e.target.value != user) {
            setFormDisabled(true)
            return
        }
        setFormDisabled(false) 
    }

    const handleSubmit = (e) => {
        navigate(`/notes/${course}/${university}`)
    }

    const updateCourse = (e) => {
        setCourse(e.target.value)
    }

    return (
        <div className='note-submit-page'>
            <Navbar user={user}/>
            <div className='note-submit-content-section'>
                <h1>Add to your university's study resources.</h1>
                <h2>Upload a PDF with some background information.</h2>
                <form className='note-submit-form' action={`https://shrouded-everglades-43691.herokuapp.com/newnote/${university}`} method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
                    <input type='file' name='file' id='file' required></input>
                    <input onChange={updateCourse} placeholder='Course Name' name='course' required></input>
                    <input placeholder='Note Title' name='title' required></input>
                    <input onChange={checkValidUser} placeholder='Your Username (make sure it is correct).' name='name' required></input>
                    <input type='submit' value='Submit' className='btn btn-primary' disabled={formDisabled}></input>
                </form>
            </div>
        </div>
    )

}

export default NoteSubmit