import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { signUp } from "../actions/signup";
import { SignUpForm } from "./signup-form.component";

export const SignUp: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, message, error } = useSelector((s: RootState) => s.auth);
  return (
    <SignUpForm
      isLoading={isLoading}
      message={message}
      error={error}
      onSubmit={(v) => dispatch(signUp(v))}
    />
  );
};
