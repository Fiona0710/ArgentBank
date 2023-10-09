import { configureStore } from '@reduxjs/toolkit';
import  tokenSlice from './tokenSlice'; 
import profileSlice from './profileSlice';

const store = configureStore({
  reducer: {
    Auth: tokenSlice,
    User: profileSlice
  },
 
});

export default store;
