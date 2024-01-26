import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { useDispatch,useSelector } from 'react-redux';


const ProfileMain = () => {
    const {userInfo} = useSelector(state=>state.auth)
    console.log(userInfo);
    const fileInputRef = React.useRef();
    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleEdit = ()=>{
        
    }

    return (
        <div className='z-0 flex justify-center'>
            <div className='min-w-full h-[500px] bg-blue-400 flex justify-center items-center'></div>
            <div className='w-[70%] h-[60%] bg-white border border-black shadow-lg absolute rounded mb-10 z-200 top-[200px] flex justify-evenly items-center'>
                <div className='w-[300px] h-[300px]'>
                    <div className="relative rounded-full">
                        <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="" className="w-full h-full object-cover relative " />
                        <div className="relative">
                            <button onClick={handleClick} className="rounded-full bg-gray-400 p-2">
                                <FaEdit size={20} color="#fff" />
                            </button>
                            <input  ref={fileInputRef} type="file" className="hidden" />
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[300px] rounded-lg shadow-md p-4 flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-2xl font-bold text-gray-900'>My Profile</h1>
                    <div className='flex flex-col gap-6'>
                        <div className='flex  text-gray-700'>
                            <span>Username :</span>
                            <span>John Doe</span>
                        </div>
                        <div className='flex justify-between text-gray-700'>
                            <span>Email :</span>
                            <span>johndoe@example.com</span>
                        </div>
                        <button onClick={handleEdit} className=' bg-blue-500 text-white rounded px-4 py-2'>Edit Profile</button>
                    </div>
                    
                </div>


            </div>
        </div>

    )
}

export default ProfileMain
