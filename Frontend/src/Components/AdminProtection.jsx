import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

const AdminProtection = () => {
    const {userInfo} = useSelector(state=> state.auth);

  return userInfo?.isAdmin ? <Outlet/> : <Navigate to="/" replace/> 
}

export default AdminProtection
