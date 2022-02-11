import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { login } from "../actions/login";
import { LoginForm, LoginFormValue } from "./login-form.component";

export const Login: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, message } = useSelector((s: RootState) => s.auth);
  return (
    <LoginForm
      isLoading={isLoading}
      error={error}
      message={message}
      onSubmit={(value: LoginFormValue) =>
        dispatch(
          login({
            email: value.email,
            password: value.password,
          })
        )
      }
    />
  );
};
