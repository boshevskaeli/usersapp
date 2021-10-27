import {createSlice} from '@reduxjs/toolkit';
import {storeUsers, getUsers} from '../asyncStorageScripts';

const initialState = {
  // users: getUsers(),
  users: [],
  temp: getUsers(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
      state.users.push(payload);
      // storeUsers(state.users);
      console.log('sdasdsadsadas', temp);
    },
    deleteUser: (state, {payload}) => {
      state.users.pop(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
