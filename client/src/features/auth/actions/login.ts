import { createAction } from "@reduxjs/toolkit";
import { LoginRequestDto } from "../dtos/login-request.dto";

export const login = createAction<LoginRequestDto>("auth/login");
