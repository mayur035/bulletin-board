import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Features/Posts/postsSlice'
import userReducer from '../Features/Users/userSlice'

export const Store = configureStore({
    reducer:{
        posts : postReducer,
        users : userReducer,
    }
})