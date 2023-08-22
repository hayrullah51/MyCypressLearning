describe('Cypress Hatasina Karsi Cozum', () => {
    it('403 Hata sonucu', () => {
        cy.visit(('https://www.airbnb.de/'), {
            headers: {
                "User-Agent": "axios/0.27.1"
            }
        })
    });
});