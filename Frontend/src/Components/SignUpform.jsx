import React, { useState,useEffect } from 'react'
import toast from "react-hot-toast"
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { registerUSer } from '../Slices/userSlice';
import { setCredentials } from '../Slices/authSlice';

const SignUpform = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [conPassword,setConPassword] = useState('');

  const dispatch = useDispatch();

  const {userInfo} = useSelector(state=> state.auth);
  const navigate = useNavigate()

  useEffect(()=>{
    if (userInfo) {
        navigate('/',{replace:true});
    }
  },[navigate,userInfo]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (password !== conPassword) {
        toast.error("Pasword do not match!")
    }else if(name.length === 0 || password.length === 0|| email.length === 0){
         toast.error("Empty field not alllowed !")
    } else {
        dispatch(registerUSer({name,email,password})).then((res)=>{
            if (res.meta.requestStatus === "rejected"){
                const errorMessage = "Username already exists!";
                toast.error(errorMessage);
              } else {
                dispatch(setCredentials(res.payload));
              }
        })
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center h-screen bg-gray-200'>
         <div className='bg-white p-8 rounded shadow-md w-96'>
           <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
           <form onSubmit={handleSubmit}>
            <input 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text" placeholder="Username" className="border border-gray-300 w-full p-2 mb-4 rounded" />

            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" placeholder="Email" className="border border-gray-300 w-full p-2 mb-4 rounded" />

            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" placeholder="Password" className="border border-gray-300 w-full p-2 mb-4 rounded" />

            <input 
            value={conPassword}
            onChange={(e)=> setConPassword(e.target.value)}
            type="password" placeholder="Confirm Password" className="border border-gray-300 w-full p-2 mb-4 rounded" />
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Sign Up</button>
            <p className='flex justify-between mt-2'>Already a user ?<Link to={"/login"} className='text-blue-600'>Login</Link></p>
            </form>
         </div>
      </div>
    </div>
  )
}

export default SignUpform
