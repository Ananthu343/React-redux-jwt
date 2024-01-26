import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Slices/userSlice';
import { logout } from '../Slices/authSlice';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { userInfo } = useSelector(state => state.auth);


  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()).then((res) => {
      dispatch(logout());
      navigate('/login')
    })
  }

  return (
    <>
      <div className='w-full h-[75px] bg-black text-white p-6 flex justify-between items-center'>
        <Link to="/"><h1 className='font-bold text-xl'>React-Redux</h1></Link>
        <button onClick={() => setMenu(!menu)} className='mr-10 hover:text-gray-700 w-[120px] h-[40px] border border-black rounded'>Menu</button>

      </div>
      {menu ? <div className='bg-white w-[150px] h-auto absolute right-7 top-20  flex justify-center flex-col'>
        {userInfo 
        ? <button onClick={handleLogout} className='hover:bg-gray-300 h-[40px] w-[150px] hover:text-red-600'>Logout</button>
        : <Link to={"/login"}><button className='hover:bg-gray-300 h-[40px] w-[150px] hover:text-green-600'>Login</button></Link>}
        {userInfo 
        ? <Link to={"/profile"}><button className='hover:bg-gray-300 h-[40px] w-[150px] hover:text-green-600'>My profile</button></Link>
        : null}
      </div> : null}
    </>
  )
}

export default Navbar
