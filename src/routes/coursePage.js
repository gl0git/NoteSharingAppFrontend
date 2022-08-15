import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar'
import SearchbarDropdown from '../components/dropdown-search'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/coursePage.css'

function CoursePage() {

  const [User, setUser] = useState()
  const [Courses, setCourses] = useState([])
  const [Options, setOptions] = useState([])
  const [Selected, setSelected] = useState([])
  const { university } = useParams()

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
    fetch(`https://shrouded-everglades-43691.herokuapp.com/courses/${university}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    } 
    })
    .then(response => response.json())
    .then(responseJSON => setCourses(responseJSON.courses))
  }, [])

  const onInputChange = (event) => {
    setOptions(
      Courses.filter((option) => option.toLowerCase().includes(event.target.value.toLowerCase()))
    );
    setSelected(event.target.value)
  };

  return (
    <div className="coursePage">
      <Navbar user={User} />
      <div className='coursepage-content-section'>
        <h1 className='coursepage-header'>{`${university}`}</h1>
        <div className='coursepage-subheader'>Find the best notes from {`${university}`} students.</div>
        <div className='course-search-add'>
          <div className='course-dropdown'><SearchbarDropdown placeholder='Search for a course' options={Courses} onInputChange={onInputChange} page='notes' hrefAdditionals={`/${university}`} /></div>
          <button className='coursepage-add-button btn btn-primary' onClick={(e) => {
            window.location.href = `https://gl0git.github.io/NoteSharingAppFrontend/#/newcourse/${university}`
          }}>Add new course</button>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;