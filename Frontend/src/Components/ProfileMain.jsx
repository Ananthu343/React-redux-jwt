import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
Modal.setAppElement('#root')
import ProfileForm from './ProfileForm';


const ProfileMain = () => {
    const { userInfo } = useSelector(state => state.auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setimg] = useState('');
    const [form, setForm] = useState(false);

    useEffect(() => {
        setName(userInfo.name)
        setEmail(userInfo.email)
        if (userInfo.image.length == 0) {
            setimg("https://avatar.iran.liara.run/public/boy?username=Ash")
        } else {
            setimg(`http://localhost:5000/${userInfo.image}`)
        }
    }, [userInfo])

    return (
        <div className='z-0 flex justify-center'>
            <div className='min-w-full h-[500px] bg-blue-400 flex justify-center items-center'></div>
            <div className='w-[70%] h-[60%] bg-white border border-black shadow-lg absolute rounded mb-10 z-200 top-[200px] flex justify-evenly items-center'>
                <div className='w-[300px] h-[300px]'>
                    <div className="relative rounded-full">
                        <img src={`${img}`} alt="" className="w-full h-full object-cover relative " />
                    </div>
                </div>
                <div className='w-[400px] h-[300px] rounded-lg shadow-md p-4 flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-2xl font-bold text-gray-900'>My Profile</h1>
                    <div className='flex flex-col gap-6'>
                        <div className='flex  text-gray-700'>
                            <span>Username :</span>
                            <span>{name}</span>
                        </div>
                        <div className='flex justify-between text-gray-700'>
                            <span>Email :</span>
                            <span>{email}</span>
                        </div>
                        <button onClick={() => setForm(true)} className=' bg-blue-500 text-white rounded px-4 py-2'>Edit Profile</button>
                    </div>
                </div>
                <Modal
                    isOpen={form}
                    onRequestClose={() => setForm(false)}
                    contentLabel="Edit profile"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-1/2 lg:w-1/3"

                >
                    <ProfileForm setForm={setForm} />
                </Modal>
            </div>
        </div>

    )
}

export default ProfileMain
