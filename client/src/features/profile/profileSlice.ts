import { createSlice } from "@reduxjs/toolkit";
import { loginSuccess } from "../auth/actions/login-success";
import { logoutSuccess } from "../auth/actions/logout-success";
import { signUpSuccess } from "../auth/actions/signup-success";
import { UserProfile } from "./model/user-profile";

export interface UserProfileState {
  current?: UserProfile;
}

export const profileSlice = createSlice({
  name: "profile",
  initialState: {} as UserProfileState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginSuccess, (_, action) => {
      return {
        current: action.payload,
      };
    });
    builder.addCase(signUpSuccess, (_, action) => {
      return {
        current: {
          id: action.payload.data._id,
          email: action.payload.data.email,
        },
      };
    });
    builder.addCase(logoutSuccess, () => {
      return {};
    });
  },
});
