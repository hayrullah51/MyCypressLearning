/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.name.firstName()

describe('faker-js Kullanimi', () => {

it('faker-js test 01', () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.get("input[data-qa='login-email']").type(fakeEmail)
    cy.get("input[placeholder='Password']").type(fakePassword)
    cy.get("button[data-qa='login-button']").click()
});

it.only('faker-js test 02', () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.get("input[data-qa='login-email']").type(fakeName)
    cy.get("input[placeholder='Password']").type(fakePassword)
    cy.get("button[data-qa='login-button']").click()
    cy.get("input[data-qa='login-email']").invoke('prop' , "validationMessage")
    .should('eq',`Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakeName}" adresinde "@" eksik.`)
});
 
});