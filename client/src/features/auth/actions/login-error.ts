import { createAction } from "@reduxjs/toolkit";

export interface LoginErrorPayload {
  code?: string;
  message?: string;
}

export const loginError = createAction<LoginErrorPayload>("auth/login-error");
