import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    // actions => action handlers
    ALTER_AUTH_STATE: (authState, action) => ({
      ...authState,
      ...action.payload,
    }),
    LOAD_AUTH_STATE: (authState) => authState,
  },
});

export const { ALTER_AUTH_STATE, LOAD_AUTH_STATE } = authSlice.actions;
export default authSlice.reducer;
