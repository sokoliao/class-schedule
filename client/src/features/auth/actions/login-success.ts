import { createAction } from "@reduxjs/toolkit";

export interface LoginSuccessPayload {
  email: string;
  id: string;
}

export const loginSuccess =
  createAction<LoginSuccessPayload>("auth/login-success");
