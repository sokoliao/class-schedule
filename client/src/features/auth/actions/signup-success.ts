import { createAction } from "@reduxjs/toolkit";
import { SignUpResponseDto } from "../dtos/signup-response.dto";

export const signUpSuccess = createAction<SignUpResponseDto>(
  "auth/signup-success"
);
