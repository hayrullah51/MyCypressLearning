/// <reference types="cypress" />

describe('Viewport Kullanimi', () => {
    it('viewport with number', () => {
        cy.viewport(2000,2000)
        cy.visit('https://www.shopist.io/')
        
    });

    it('viewport with string', () => {
        cy.viewport("macbook-16")
        cy.visit('https://www.shopist.io/')
        
    });
});