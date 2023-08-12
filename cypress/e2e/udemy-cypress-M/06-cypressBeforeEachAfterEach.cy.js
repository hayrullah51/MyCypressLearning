describe('Befor After Kullanimi', () => {
    beforeEach(() => {
        cy.log('BeforeEach Kullanimi Cypress Test!!!')
        cy.visit('https://automationexercise.com/')
    });

    afterEach(() => {
        cy.log('AfterEach Kullanimi Cypress Testi +++')
    });

    it('Title Validation', () => {
        cy.title().should('eq',"Automation Exercise")
    });
    
    it('Title Validation 2', () => {
        cy.title().should('contain',"Automation")
    });

    it('URL Test', () => {
        cy.url().should('contain','com')
    });

    it.only('Hostname Validation', () => {
        cy.location('hostname').should('include','automation')
    });
});