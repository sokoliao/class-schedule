import { Action } from "@reduxjs/toolkit";
import axios from "axios";
import {
  catchError,
  debounce,
  filter,
  from,
  interval,
  map,
  mergeMap,
  Observable,
  of,
} from "rxjs";
import { login } from "../actions/login";
import { loginError } from "../actions/login-error";
import { loginSuccess } from "../actions/login-success";

export const loginEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(login.match),
    debounce(() => interval(1000)),
    mergeMap((a) =>
      from(
        axios.post("http://localhost:3000/login", {
          email: a.payload.email,
          password: a.payload.password,
        })
      ).pipe(
        map((r) => loginSuccess(r.data)),
        catchError((e) =>
          of(
            loginError({
              code: `${e?.response?.status}`,
              message: e?.message,
            })
          )
        )
      )
    )
  );
