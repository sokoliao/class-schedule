import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

interface UserProfile {
  login: string;
  password: string;
  userId?: string;
  isLoading: boolean;
  message?: string;
  action: "" | "LOGIN" | "SIGN_UP" | "LOGOUT";
}

const DEFAULT_VALUE: UserProfile = {
  login: "",
  password: "",
  isLoading: false,
  action: "",
};

interface User {
  _id: string;
  email: string;
  password: string;
}

function App() {
  const [formState, setFormState] = useState<UserProfile>(DEFAULT_VALUE);
  const login = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setFormState((s) => {
      return {
        ...s,
        userId: "123456",
        action: "LOGIN",
      };
    });
  };
  const signUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormState((s) => {
      return {
        ...s,
        userId: "123456",
      };
    });
  };
  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormState((s) => DEFAULT_VALUE);
  };
  useEffect(() => {
    async function callLogin() {
      try {
        if (formState.action === "") return;
        else if (formState.action === "LOGIN") {
          const { data } = await axios.post("http://localhost:3000/login", {
            email: formState.login,
            password: formState.password,
          });
          console.log(data);
        }
      } catch (error) {
        console.error(error);
        setFormState((s) => {
          return { ...s, message: "ERROR" };
        });
      }
    }
    callLogin();
  }, [formState.action]);
  return (
    <form onSubmit={login}>
      {formState.message && <label>{formState.message}</label>}
      <input
        type="text"
        value={formState.login}
        onChange={(e) =>
          setFormState((s) => {
            console.log(e);
            return { ...s, login: e.target.value };
          })
        }
        placeholder="Login"
      />
      <input
        type="text"
        value={formState.password}
        onChange={(e) =>
          setFormState((s) => {
            return { ...s, password: e.target.value };
          })
        }
        placeholder="Password"
      />
      {!!!formState.userId && (
        <button type="submit" onClick={signUp}>
          Sign Up
        </button>
      )}
      {!!!formState.userId && (
        <button type="submit" onClick={login}>
          Login
        </button>
      )}
      {!!formState.userId && (
        <button type="submit" onClick={logout}>
          Logout
        </button>
      )}
    </form>
  );
}

export default App;
