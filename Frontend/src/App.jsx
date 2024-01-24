import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/profile' element = {<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App
