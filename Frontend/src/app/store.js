import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice.js'
import authReducer from "../Slices/authSlice.js";
import adminReducer from "../Slices/adminSlice.js";

const store = configureStore({
    reducer:{
        user:userReducer,
        auth:authReducer,
        admin:adminReducer
    }
})

export default store;