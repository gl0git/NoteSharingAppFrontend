import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar(props){

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    if (props.user) {
        return (
        <div className='navbar'>
            <ul className='navbar-content'>
                <div className='left'>
                    <li>NoteShare</li>
                </div>
                <div className='right'>
                    <li><a href='http://localhost:3000/'>Home</a></li>
                    <li><a href='http://localhost:3000/login'>User: {props.user}</a></li>
                    <li><a href='http://localhost:3000/' onClick={logOut}>Sign Out</a></li>
                </div>
            </ul>
        </div>
        )
    }

    return (
        <div className='navbar'>
            <ul className='navbar-content'>
                <div className='left'>
                    <li>NoteShare</li>
                </div>
                <div className='right'>
                    <li><a href='http://localhost:3000/'>Home</a></li>
                    <li><a href='http://localhost:3000/login'>Login</a></li>
                    <li><a href='http://localhost:3000/signup'>Signup</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar