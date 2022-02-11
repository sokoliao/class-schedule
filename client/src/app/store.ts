import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { authSlice } from "../features/auth/authSlice";
import { loginEpic } from "../features/auth/epics/loginEpic";
import { signUpEpic } from "../features/auth/epics/signUpEpic";
import { profileSlice } from "../features/profile/profileSlice";

const combinedReducer = combineReducers({
  profile: profileSlice.reducer,
  auth: authSlice.reducer,
});

function getState<TState>(
  r: Reducer<CombinedState<TState>, AnyAction>
): () => TState {
  return () => undefined as unknown as TState;
}
const g = getState(combinedReducer);
export type RootState = ReturnType<typeof g>;

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

const rootEpic = combineEpics<AnyAction, AnyAction, RootState>(
  loginEpic,
  signUpEpic
);
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
