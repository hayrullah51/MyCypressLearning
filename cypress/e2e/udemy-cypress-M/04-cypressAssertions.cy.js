describe('Cypress Assertion Kullanimi', () => {
    
    it('Assertion Examples', () => {
        cy.visit('https://www.shopist.io/');
        cy.title().should('eq','Shop.ist')
        cy.url().should('contain','://www.shopist.io/')

        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible')
        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('contain','Shop').and('contain','the')
        cy.get('#main section > a > div > div:nth-child(1)').should('contain','Shop')

        cy.get('#main section > a > div > div:nth-child(1)').should('have.text','Shop the look') // tum text i dogrular

        cy.get('#main section > a > div > div:nth-child(1)').should('have.length','1')
        cy.get('#main section > a > div > div:nth-child(1)').its('length').and('eq',1)

        cy.get('#main section > a').should('have.attr' , 'href' , '/department/chairs') // Implicit Assertions
    });
});