import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  email: string;
  role: string;
  full_name: string;
  is_verified: boolean;
  profile_picture: string | null;
};

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAuth: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    logoutAuth: (state) => {
      state.user = null;
    },
  },
});

export const { loginAuth, logoutAuth } = authSlice.actions;
export default authSlice.reducer;
