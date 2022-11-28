import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import { SnackbarProvider } from "notistack";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </RecoilRoot>
);
