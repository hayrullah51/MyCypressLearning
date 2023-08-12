/// <reference types="cypress" />
import { slowCypressDown } from 'cypress-slow-down';
const { faker } = require('@faker-js/faker');

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.name.firstName()

slowCypressDown(false)
//default olarak her islemde 1 sn bekleyecek
describe('Slow-Down Kullanimi', () => {

it('Slowdown test 01', () => {
    cy.slowDown(2000)
    cy.visit('https://www.automationexercise.com/login');
    cy.get("input[data-qa='login-email']").type(fakeEmail)
    cy.get("input[placeholder='Password']").type(fakePassword)
    cy.get("button[data-qa='login-button']").click()
    cy.slowDownEnd()
});

it('Slowdown test 02', () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.get("input[data-qa='login-email']").type(fakeName)
    cy.get("input[placeholder='Password']").type(fakePassword)
    cy.get("button[data-qa='login-button']").click()
    cy.get("input[data-qa='login-email']").invoke('prop' , "validationMessage")
    .should('eq',`Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakeName}" adresinde "@" eksik.`)
});
 
});