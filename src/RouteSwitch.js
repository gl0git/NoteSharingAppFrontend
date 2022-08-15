import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CoursePage from './routes/coursePage'
import CourseSubmit from './routes/courseSubmit'
import NoteSubmit from './routes/noteSubmit'
import NotesPage from './routes/notesPage'
import NotePage from './routes/notePage'
import LoginPage from './routes/login'
import SignUpPage from './routes/signUp'

const RouteSwitch = () => {

    return (
        <HashRouter basename='https://gl0git.github.io/NoteSharingAppFrontend/'>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage/> } />
                <Route path='/courses/:university'  element={<CoursePage />} />
                <Route path='/notes/:course/:university' element={<NotesPage />} />
                <Route path='/newcourse/:university' element={<CourseSubmit />} />
                <Route path='/newnote/:university' element={<NoteSubmit />} />
                <Route path='/note/:id' element={<NotePage />} />
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch