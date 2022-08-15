import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css' 
import Navbar from '../components/navbar'

function LoginPage(){

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
        .then(responseJSON => setUser(responseJSON.user.name))
    }, [])


    const postLogin = () => {
        fetch(`https://shrouded-everglades-43691.herokuapp.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON)
            localStorage.setItem('token', `${responseJSON.accessToken}`)
        })
    }

    const updateUsername = (e) => {
        setUsername(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        navigate('/')
    }

    return (
        <div className='login-page'>
        <Navbar user={user}/>
        <form id='login-form'>
            <h1>Login</h1>
            <input onChange={updateUsername} type='text' name='' placeholder='username'></input>
            <input onChange={updatePassword} type='password' name='' placeholder='password'></input>
            <input onClick={(e) => {
                e.preventDefault(); postLogin(); handleSubmit()
            }} type='submit' value='Login'></input>
        </form>
        </div>
    )
}

export default LoginPage