import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormWrapper } from "../common/form-wrapper.component";
import { Login } from "../features/auth/components/login.component";
import { SignUp } from "../features/auth/components/signup.component";
import "./App.css";
import { Content } from "./components/content.component";
import { Header } from "./components/header.component";
import { store } from "./store";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <Content>
            <Routes>
              <Route
                path="/"
                element={
                  <FormWrapper>
                    <Login />
                  </FormWrapper>
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <FormWrapper>
                    <Login />
                  </FormWrapper>
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <FormWrapper>
                    <SignUp />
                  </FormWrapper>
                }
              ></Route>
              <Route path="*" element={<h1>404</h1>}></Route>
            </Routes>
          </Content>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
