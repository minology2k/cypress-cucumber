import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("User open the login page", () => {
  cy.visit("/");
});
