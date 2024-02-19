import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postsSlice'

export const Store = configureStore({
    reducer:{
        posts : postReducer,
    }
})