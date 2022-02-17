import ReactDom from "react-dom";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import App from "./app";
import "./styles/global.css";
import { AuthProvider } from "./context/AuthProvider/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider";

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
