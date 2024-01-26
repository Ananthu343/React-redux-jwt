import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice.js'
import authReducer from "../Slices/authSlice.js";

const store = configureStore({
    reducer:{
        user:userReducer,
        auth:authReducer
    }
})

export default store;