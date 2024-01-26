import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-[500px] flex justify-center items-center bg-blue-900'>
      <h1 className='text-red-500 font-bold justify-center'>Home</h1>
    </div>
    </>
    
  )
}

export default Home
