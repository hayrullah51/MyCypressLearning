describe('Custom Commands', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    });
    it('Custom Comands kUllanim oernekleri', () => {
       
        cy.get('header#header li:nth-child(4) > a').click()
        cy.get('input[data-qa="login-email"]').type('example@xyz.com')
        cy.get('input[data-qa="login-password"]').type('Password')
        cy.get('button[data-qa="login-button"]').click()
    });
    it('Custom Commands Kullanim Ornegi', () => {
        cy.login()
    });

    it('Custom Commands Kullanim Ornegi Dinamik', () => {
        cy.login02('DinamikUser','DinamikPassword')
    });
});