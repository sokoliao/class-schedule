import { Action } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Observable,
  filter,
  mergeMap,
  from,
  map,
  catchError,
  of,
  delay,
} from "rxjs";
import { logout } from "../actions/logout";
import { logoutError } from "../actions/logout-error";
import { logoutSuccess } from "../actions/logout-success";
import { LogoutResponseDto } from "../dtos/logout-response.dto";

export const logoutEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    delay(1000),
    filter(logout.match),
    mergeMap((a) =>
      from(axios.post("http://localhost:3000/logout")).pipe(
        map((r) => logoutSuccess(r.data as LogoutResponseDto)),
        catchError((e) =>
          of(
            logoutError({
              code: e?.response?.status,
              message: e?.message,
            })
          )
        )
      )
    )
  );
