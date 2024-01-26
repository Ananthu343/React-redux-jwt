import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import './App.css'
import PrivateRoute from './Components/PrivateRoute'
import AdminDashboard from './Pages/AdminDashboard'
import AdminProtection from './Components/AdminProtection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='' element={<PrivateRoute/>}>
            <Route path='/profile' element = {<Profile/>} />
        </Route>
        <Route path='' element={<AdminProtection/>} >
          <Route path='/admin' element={<AdminDashboard/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
