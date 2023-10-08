import { configureStore } from '@reduxjs/toolkit';
import  tokenSlice from './tokenSlice'; 

const store = configureStore({
  reducer: {
    Auth: tokenSlice
  },
 
});

export default store;
