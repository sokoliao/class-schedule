import { createAction } from "@reduxjs/toolkit";
import { LogoutResponseDto } from "../dtos/logout-response.dto";

export const logoutSuccess = createAction<LogoutResponseDto>(
  "auth/logout-response"
);
