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
                    <li><a href='https://gl0git.github.io/NoteSharingAppFrontend/'>Home</a></li>
                    <li><a href='https://gl0git.github.io/NoteSharingAppFrontend/#/login'>User: {props.user}</a></li>
                    <li><a href='https://gl0git.github.io/NoteSharingAppFrontend/' onClick={logOut}>Sign Out</a></li>
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
                    <li><a href='https://gl0git.github.io/NoteSharingAppFrontend/'>Home</a></li>
                    <li><a href='https://gl0git.github.io/NoteSharingAppFrontend/#/login'>Login</a></li>
                    <li><a href='https://gl0git.github.io/NoteSharingAppFrontend/#/signup'>Signup</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar