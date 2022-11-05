import {configureStore} from '@reduxjs/toolkit';
import postReducer from './features/postSlice'

export default configureStore({
    reducer:{
        app:postReducer
    }
})