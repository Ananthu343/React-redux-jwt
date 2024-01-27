import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen object-cover'>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Description of Image" className='w-full h-full object-cover' />
      </div>
    </>

  )
}

export default Home
