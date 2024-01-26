import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';

import axios from 'axios'

const users_url = "http://localhost:5000/api/users"

export const registerUSer = createAsyncThunk("user/register",async (data)=>{

    const response = await axios.post(`${users_url}`,data,{
        withCredentials:true
    })
    console.log(response);
    const user = response.data;
    console.log(user,"user");
    return user;
})

export const logoutUser = createAsyncThunk("user/logout",async ()=>{
    const response = await axios.post(`${users_url}/logout`);
    return response.status === 200;
})

export const loginUser = createAsyncThunk("user/login",async (data)=>{
    const response = await axios.post(`${users_url}/login`,data,{
        withCredentials:true
    });
    return response.data;
})

export const updateUser = createAsyncThunk("user/update", async data => {
    const response = await axios.put(`${users_url}/profile`, data, {
      withCredentials: true,
    });
    const user = response.data;
    return user;
  });

const userSlice = createSlice({
    name:"user",
    initialState: { loading: "idle",error: ""},
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(registerUSer.pending,state=>{
            state.loading = "loading"
        })
        .addCase(registerUSer.fulfilled,state =>{
            state.loading = "idle"
        })
        .addCase(registerUSer.rejected,(state,action) =>{
            state.loading = "idle"
            state.error = action.error.message
        })
        .addCase(logoutUser.pending,(state)=>{
            state.loading = "loading"
        })
        .addCase(logoutUser.fulfilled,(state)=>{
            state.loading = "idle"
        })
        .addCase(logoutUser.rejected,(state,action)=>{
            state.loading = "idle"
            state.error = action.error.message
        })
        .addCase(loginUser.pending,(state)=>{
            state.loading = "loading"
        })
        .addCase(loginUser.fulfilled,(state)=>{
            state.loading = "idle"
        })
        .addCase(loginUser.rejected,(state)=>{
            state.loading = "idle"
            state.error = "Invalid email or password"
        })
        .addCase(updateUser.pending, state => {
            state.loading = "loading";
          })
        .addCase(updateUser.fulfilled, (state) => {
            state.loading = "idle";  
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = "idle";
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer ;