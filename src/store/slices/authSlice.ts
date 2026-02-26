import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userCredential: any | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  userCredential: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action: PayloadAction<any>) => {
      state.userCredential = action.payload;
      state.isLoggedIn = true;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    logout: (state) => {
      state.userCredential = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  setUserCredential,
  setToken,
  logout,
} = authSlice.actions;

export default authSlice.reducer;