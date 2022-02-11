import { createAction } from "@reduxjs/toolkit";

export interface SignUpErrorPayload {
  code?: string;
  message?: string;
}

export const signUpError =
  createAction<SignUpErrorPayload>("auth/signup-error");
