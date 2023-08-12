describe('Befor After Kullanimi', () => {
    before(() => {
        cy.log('Before Kullanimi Cypress Test!!!')
        cy.visit('https://automationexercise.com/')
    });

    after(() => {
        cy.log('After Kullanimi Cypress Testi +++')
    });

    it('Title Validation', () => {
        cy.title().should('eq',"Automation Exercise")
    });
    
});