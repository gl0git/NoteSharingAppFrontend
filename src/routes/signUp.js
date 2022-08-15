import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Sign-up.css' 
import Navbar from '../components/navbar'

function SignUpPage(){


    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()

    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch(`https://shrouded-everglades-43691.herokuapp.com/authenticate`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        }
        })
        .then(response => response.json())
        .then(responseJSON => console.log(responseJSON.user.name))
    }, [])


    const postSignUp = () => {
        fetch(`https://shrouded-everglades-43691.herokuapp.com/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ username: username, password: password })
        })
        handleSubmit()
    }

    const updateUsername = (e) => {
        setUsername(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = () => {
        navigate('/login')
    }

    return (
        <div className='signUp-page'>
        <Navbar user={user}/>
        <form id='signUp-form'>
            <h1>Sign Up</h1>
            <input onChange={updateUsername} type='text' name='username' placeholder='username'></input>
            <input onChange={updatePassword} type='password' name='password' placeholder='password'></input>
            <input onClick={postSignUp} type='submit' name='submit' value='Sign Up'></input>
        </form>
        </div>
    )
}

export default SignUpPage
