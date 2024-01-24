import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[75px] bg-pink-200 p-6'>
      <Link to="/"><h1 className='font-bold text-xl'>React-Redux</h1></Link>

    </div>
  )
}

export default Navbar
