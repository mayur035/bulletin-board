import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',name:'mayur'},
    {id:'2',name:'kirtan'},
    {id:'3',name:'manan'}
]

const UserSlice = createSlice({
    name:'users',
    initialState,
    // reducers:{}
})

export const selectAllUsers = (state) => state.users;//users from store
export default UserSlice.reducer;