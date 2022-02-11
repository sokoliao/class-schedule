import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions/login";
import { loginError } from "./actions/login-error";
import { loginSuccess } from "./actions/login-success";
import { signUp } from "./actions/signup";
import { signUpError } from "./actions/signup-error";
import { signUpSuccess } from "./actions/signup-success";

export interface AuthState {
  email?: string;
  isLoading: boolean;
  message?: string;
  error?: string;
}

const INITIAL_STATE: AuthState = {
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login, () => {
      return {
        isLoading: true,
      };
    });
    builder.addCase(loginSuccess, (_, action) => {
      return {
        email: action.payload.email,
        isLoading: false,
        message: "Login was successful",
      };
    });
    builder.addCase(loginError, (_, action) => {
      return {
        isLoading: false,
        error: `${action.payload.code} ${action.payload.message}`,
      };
    });

    builder.addCase(signUp, () => {
      return {
        isLoading: true,
      };
    });
    builder.addCase(signUpSuccess, (_, action) => {
      return {
        email: action.payload.data.email,
        isLoading: false,
        message: "Signin was successful",
      };
    });
    builder.addCase(signUpError, (_, action) => {
      return {
        isLoading: false,
        error: `${action.payload.code} ${action.payload.message}`,
      };
    });
  },
});
