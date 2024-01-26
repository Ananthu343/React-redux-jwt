import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../Slices/userSlice';
import { setCredentials } from '../Slices/authSlice';
import toast from 'react-hot-toast';

const Loginform = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userInfo} = useSelector(state=>state.auth)

    useEffect(() => {
        if (userInfo) {
          navigate("/", { replace: true });
        }
    }, [navigate, userInfo]);

    const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(loginUser({email,password})).then((action)=>{
        if (action.meta.requestStatus === "rejected"){
            const errorMessage = "Invalid Creadentials";
            toast.error(errorMessage);
        } else {
            
            dispatch(setCredentials(action.payload));
        }
       })
    }

  return (
    <div>
      <div className='flex items-center justify-center h-screen bg-gray-200'>
        <div className='bg-white p-8 rounded shadow-md w-96'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" placeholder="email" className="border border-gray-300 w-full p-2 mb-4 rounded" />
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" placeholder="Password" className="border border-gray-300 w-full p-2 mb-4 rounded" />
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">Login</button>
            <p className='flex justify-between mt-2'>Not a user ?<Link to={"/signup"} className='text-blue-600'>Signup</Link></p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Loginform
