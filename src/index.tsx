import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./Router";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainMenu } from "./components/MainMenu";
import { TransferFunds } from "./components/TransferFundsForm";
import { Container } from "react-bootstrap";
import { SidebarNav } from "./components/SideBarMenu";
// import {./styles/}

import classNames from "classnames";
import { Header } from "@syncfusion/ej2-react-navigations";
import TopNav from "./components/TopNav";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={classNames("main-wrapper", "main-wrapper-responsive")}>
      {/* <Layout> */}
      <TopNav />
      <SidebarNav />
      <main className="App-header main-container container-fluid">
        {/* {children} */}

        <HashRouter>
          <Container className="App-header fluid justify-content-center me-auto">
            {/* <header className="App-header"> */}

            <App />
            {/* </header> */}
            <Router />
          </Container>
        </HashRouter>
        {/* </Layout> */}
      </main>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
