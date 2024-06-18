import React from "react";
import { Alert } from ".";
import { theme, ColorOptions } from "@global/theme";
import { withProviders } from "../../../../cypress";

const selectedAlert = "[data-cy=alert]";

describe("Alert.tsx", () => {
  it("1. should be hidden if isVisible is false", () => {
    withProviders(
      <Alert
        isVisible={false}
        handleOnModalClose={() => {}}
        message="this is a message"
        data-cy="alert"
      />,
    );
    cy.get(selectedAlert).should("not.exist");
  });

  it("2. should be visible if isVisible is true", () => {
    withProviders(
      <Alert
        isVisible={true}
        handleOnModalClose={() => {}}
        message="this is a message"
        data-cy="alert"
      />,
    );
    cy.get(selectedAlert).should("exist");
  });

  it("3. should render message", () => {
    const message = "this is a message";
    withProviders(
      <Alert
        isVisible={true}
        handleOnModalClose={() => {}}
        message={message}
        data-cy="alert"
      />,
    );
    cy.get(selectedAlert).should("contain", message);
  });

  it("4. should render default color when color is not provided", () => {
    withProviders(
      <Alert
        isVisible={true}
        handleOnModalClose={() => {}}
        message="this is a message"
        data-cy="alert"
      />,
    );
    cy.get(selectedAlert).should(
      "have.css",
      "borderColor",
      theme.colors[ColorOptions.Green],
    );
  });

  it("5. should render color when color is provided", () => {
    withProviders(
      <Alert
        isVisible={true}
        handleOnModalClose={() => {}}
        message="this is a message"
        color={ColorOptions.Red}
        data-cy="alert"
      />,
    );
    cy.get(selectedAlert).should(
      "have.css",
      "borderColor",
      theme.colors[ColorOptions.Red],
    );
  });
});
