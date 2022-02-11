import React from "react";
import { Provider } from "react-redux";
import { Login } from "../features/auth/components/login.component";
import { Logout } from "../features/auth/components/logout.component";
import { SignUp } from "../features/auth/components/signup.component";
import "./App.css";
import { Content } from "./components/content.component";
import { Header } from "./components/header.component";
import { store } from "./store";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Content>
          <Login />
          <Logout />
          <SignUp />
          <Logout />
          <SignUp />
        </Content>
      </>
    </Provider>
  );
};

export default App;
