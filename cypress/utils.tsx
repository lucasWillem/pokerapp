import React from "react";
import { mount } from "@cypress/react";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "styled-components";
import { NetworkProvider } from "../src/networking/NetworkProvider";
import { store } from "../src/redux/store";
import theme from "../src/global/theme";
import { Router } from "../src/routing/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

const withProviders = (component: React.ReactElement) => {
  return mount(
    <React.StrictMode>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <NetworkProvider>
            <Router>{component}</Router>
          </NetworkProvider>
        </ThemeProvider>
      </StoreProvider>
    </React.StrictMode>,
  );
};

export default withProviders;
