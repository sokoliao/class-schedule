import { createSlice } from "@reduxjs/toolkit";

export interface UserProfile {
  id: string;
  email: string;
}

export interface UserProfileState {
  current?: UserProfile;
}

export const profileSlice = createSlice({
  name: "profile",
  initialState: {} as UserProfileState,
  reducers: {},
  extraReducers: {},
});
