

describe('Back Forwared Kullanimi', () => {
    it('cypress.io sayfasina gidip back forward komutlari', () => {
        cy.visit('https://www.cypress.io/')

        cy.get('nav > div > ul > li:nth-child(5) > a').click()
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

        cy.go('back') // bizi bir onceki sayfaya goturur -1 de 'back' demek
        cy.title().should('eq' , 'JavaScript Component Testing and E2E Testing Framework | Cypress')

        cy.go('forward') // bizi sonraki sayfaya gonderir 1 de 'forward' demek
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

        cy.go(-1) // bizi bir onceki sayfaya goturur -1 de 'back' demek
        cy.title().should('eq' , 'JavaScript Component Testing and E2E Testing Framework | Cypress')

        cy.go(1) // bizi sonraki sayfaya gonderir 1 de 'forward' demek
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')
    });
});