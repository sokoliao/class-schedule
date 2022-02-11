import { createAction } from "@reduxjs/toolkit";

export interface LogoutErrorPayload {
  code?: string;
  message?: string;
}

export const logoutError =
  createAction<LogoutErrorPayload>("auth/logout-error");
