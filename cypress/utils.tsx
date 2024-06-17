import React from "react";
import { mount } from "@cypress/react18";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "styled-components";
import { NetworkProvider } from "@networking/NetworkProvider";
import { store } from "@redux/store";
import theme from "@global/theme";
import { Router } from "@routing/router";
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
