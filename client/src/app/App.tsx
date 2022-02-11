import React from "react";
import { Provider } from "react-redux";
import { Login } from "../features/auth/components/login.component";
import { Logout } from "../features/auth/components/logout.component";
import { SignUp } from "../features/auth/components/signup.component";
import "./App.css";
import { store } from "./store";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <>
        <header
          className="navbar border-bottom position-absolute vw-100 p-0"
          style={{
            height: "3rem",
            zIndex: 1000,
          }}
        >
          <ul className="container-fluid navbar-nav flex-row justify-content-start">
            <li className="nav-item m-1">
              <a className="nav-link" href="#">
                Page
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link" href="#">
                Page
              </a>
            </li>
            <li className="nav-item m-1 flex-grow-1"></li>
            <li className="nav-item m-1">
              <a className="nav-link" href="#">
                Page
              </a>
            </li>
          </ul>
        </header>
        <section
          className="vh-100 vw-100"
          style={{
            paddingTop: "3rem",
          }}
        >
          <div className="container-fluid h-100 overflow-auto">
            <Login />
            <Logout />
            <SignUp />
            <Logout />
            <SignUp />
          </div>
        </section>
      </>
    </Provider>
  );
};

export default App;
