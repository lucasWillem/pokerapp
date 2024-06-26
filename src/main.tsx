import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "styled-components";

import { store } from "@/redux/index";
import { theme } from "@/global/theme";
import { NetworkProvider } from "@/networking/index";
import { ErrorBoundary } from "@/components/templates/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <NetworkProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </NetworkProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
