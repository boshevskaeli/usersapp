import {createSlice} from '@reduxjs/toolkit';
import {storeUsers, getUsers} from '../asyncStorageScripts';

const initialState = {
  users: [],
  temp: getUsers().then((result) => {
    this.temp = result;
  }),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
      state.users.push(payload);
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
