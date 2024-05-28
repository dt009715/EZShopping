import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Alan Turing',
    firstName: 'Alan',
    lastName: 'Turing',
    email: 'alan@turing.dev'
  },
  reducers: {
    updateUser: (state, action) => {
      state.name = `${action.payload.firstName} ${action.payload.lastName}`;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    }
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;