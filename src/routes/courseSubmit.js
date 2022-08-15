import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../styles/Course-Note-Submit.css'
import Navbar from '../components/navbar'

function CourseSubmit() {

    let {university} = useParams()

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [user, setUser] = useState()
    const [course, setCourse] = useState()

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

    function postNewCourse() {
            fetch(`https://shrouded-everglades-43691.herokuapp.com/newcourse/${university}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({'course': course})
            })
    }

    const updateCourse = (e) => {
        setCourse(e.target.value)
    }

    return (
        <div className='course-submit-page'>
            <Navbar user={user}/>
            <div className='course-submit-content-section'>
                <h1>{`Is there a missing course?`}</h1>
                <h2>Just put the course code to add it.</h2>
                <form className='course-submit-form'>
                    <input onChange={updateCourse} placeholder='Course Code' name='course' required></input>
                    <input onClick={(e) => {
                        e.preventDefault(); postNewCourse(); navigate(`/courses/${university}`)
                    }} class='btn btn-primary' type='submit' value='Submit'></input>
                </form>
            </div>
        </div>
    )

}

export default CourseSubmit