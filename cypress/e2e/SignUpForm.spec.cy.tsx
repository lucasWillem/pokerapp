import { AuthenticationEndPoints } from "@/networking/constants";

enum WaitTimes {
  Short = 2000,
  Medium = 10000,
  Long = 15000,
}

const validEmail = "lucas@test.email.com";
const validPassword = "P@55w0rd@1";
const inValidEmail = "anInvalidEmail";
const inValidPassword = "P55w0rd1";

const user = {
  jwt: "fake-jwt-token-123",
  username: "testuser",
};

describe("Signup form", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("1. will disable submit button if email or password fails validation", () => {
    cy.wait(WaitTimes.Long);

    //email validation failure
    cy.get("[data-cy=signup-email]").type(inValidEmail);
    cy.get("[data-cy=button]").first().should("have.attr", "disabled");

    //password validation failure
    cy.get("[data-cy=signup-password]").type(inValidPassword);
    cy.get("[data-cy=button]").first().should("have.attr", "disabled");

    //valid email and password
    cy.get("[data-cy=signup-password]").type(validPassword);
    cy.get("[data-cy=signup-email]").type(validEmail);
    cy.get("[data-cy=button]").first().should("not.be.disabled");
  });

  it("2. displays an error message in an alert on API error", () => {
    const errorMessage = "User already exists";

    cy.wait(WaitTimes.Long);

    cy.get("[data-cy=signup-email]").type(validEmail);
    cy.get("[data-cy=signup-password]").type(validPassword);

    cy.get("[data-cy=button]").first().click();

    cy.intercept("POST", AuthenticationEndPoints.Register, {
      statusCode: 400,
      body: {
        error: {
          message: errorMessage,
        },
      },
    }).as("registerRequest");

    cy.get("[data-cy=alert]").should("contain", errorMessage);
  });

  it("3. Stores user in session storage if user is successfully registered and logged in ", () => {
    cy.wait(WaitTimes.Long);

    cy.get("[data-cy=signup-email]").type(validEmail);
    cy.get("[data-cy=signup-password]").type(validPassword);

    cy.get("[data-cy=button]").first().click();

    cy.intercept("POST", AuthenticationEndPoints.Register, {
      statusCode: 200,
      body: user,
    }).as("registerRequest");

    cy.window().then((win) => {
      win.sessionStorage.setItem("user", JSON.stringify(user));
    });
  });
});
