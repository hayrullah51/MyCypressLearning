describe('Cypress Env Variables', () => {
    it('Ortam Degiskenleri Kullanim Ornegi', () => {
        cy.visit(Cypress.env('amazon'))
        //env'yi config.js'den env altindan geliyor
    });
});