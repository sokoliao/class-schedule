import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { catchError, filter, from, map, mergeMap, Observable, of } from "rxjs";
import { signUp } from "../actions/signup";
import { signUpError } from "../actions/signup-error";
import { signUpSuccess } from "../actions/signup-success";
import { SignUpResponseDto } from "../dtos/signup-response.dto";

export const signUpEpic = (actions$: Observable<AnyAction>) =>
  actions$.pipe(
    filter(signUp.match),
    mergeMap((a) =>
      from(
        axios.post("http://localhost:3000/signup", {
          email: a.payload.email,
          password: a.payload.password,
        })
      ).pipe(
        map((r) => signUpSuccess(r.data as SignUpResponseDto)),
        catchError((e) =>
          of(
            signUpError({
              code: e?.response?.status,
              message: e?.message,
            })
          )
        )
      )
    )
  );
