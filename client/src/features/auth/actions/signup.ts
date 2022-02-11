import { createAction } from "@reduxjs/toolkit";
import { SignUpRequestDto } from "../dtos/signup-request.dto";

export const signUp = createAction<SignUpRequestDto>("auth/signup");
