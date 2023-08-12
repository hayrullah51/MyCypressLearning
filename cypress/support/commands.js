// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";
require("cypress-delete-downloads-folder").addCustomCommand();

import customCommandsLogin from "../pageObjectModel/customCommandsLogin";

Cypress.Commands.add("login", () => {
  cy.visit("https://automationexercise.com/");
  cy.get("header#header li:nth-child(4) > a").click();
  cy.get('input[data-qa="login-email"]').type("example@xyz.com");
  cy.get('input[data-qa="login-password"]').type("Password");
  cy.get('button[data-qa="login-button"]').click();
});

// daha dinamik kod icin soyle yapilmali !!!

Cypress.Commands.add("login02", (userName, password) => {
  cy.get("header#header li:nth-child(4) > a").click();
  cy.get('input[data-qa="login-email"]').type(userName);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add("login03", (userName, password) => {
  cy.get("header#header li:nth-child(4) > a").click();
  customCommandsLogin.userNameField.type(userName);
  customCommandsLogin.passwordField.type(password);
  customCommandsLogin.loginButton.click();
});

//With Session
Cypress.Commands.add("loginWithSession", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.contains("Sign in").click();
    cy.get("div#main fieldset:nth-child(1) > input").type(username);
    cy.get("div#main fieldset:nth-child(2) > input").type(password);
    cy.get('div#main button[type="submit"]').click();
    cy.get("div#main nav > div > ul > li:nth-child(2) > a")
      .should("be.visible")
      .and("contain", "New Post");
  });
});
