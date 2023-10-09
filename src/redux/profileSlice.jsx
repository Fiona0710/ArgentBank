import { createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'User',
    initialState:{
        email: null,
        firstName: null,
        lastName: null,
        userName: null,
    },
    reducers:{
        userProfile:(state, action) => {
            state.email = action.payload.email,
            state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName,
            state.userName = action.payload.userName
        }
    }
});

export const { userProfile } = profileSlice.actions;
 
export default profileSlice.reducer;

