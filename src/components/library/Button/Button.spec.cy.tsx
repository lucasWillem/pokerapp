import React from "react";
import { Button } from "@/components/library/Button";
import { withProviders } from "../../../../cypress";
import { theme, ColorOptions } from "@/global/theme";

describe("Button.tsx", () => {
  const selectedButton = "[data-cy=button]";

  it("1. should render button text", () => {
    const buttonText = "Click me";
    withProviders(<Button data-cy="button">{buttonText}</Button>);
    cy.get(selectedButton).should("contain", buttonText);
  });

  it("2. should be disabled when disabled prop is true", () => {
    withProviders(
      <Button disabled data-cy="button">
        Disabled Button
      </Button>,
    );
    cy.get(selectedButton).should("be.disabled");
  });

  it("3. should trigger onClick when clicked", () => {
    const onClick = cy.stub();
    withProviders(
      <Button onClick={onClick} data-cy="button">
        Click Button
      </Button>,
    );
    cy.get(selectedButton)
      .click()
      .then(() => {
        expect(onClick).to.have.been.calledOnce;
      });
  });

  it("5. should apply color when provided", () => {
    withProviders(
      <Button color={ColorOptions.Black} data-cy="button">
        Styled Button
      </Button>,
    );
    cy.get(selectedButton).should(
      "have.css",
      "border-color",
      theme.colors[ColorOptions.Black],
    );
  });

  it("4. should apply default color when no color prop provided", () => {
    withProviders(<Button data-cy="button">Styled Button</Button>);
    cy.get(selectedButton).should(
      "have.css",
      "border-color",
      theme.colors[ColorOptions.Green],
    );
  });
});
