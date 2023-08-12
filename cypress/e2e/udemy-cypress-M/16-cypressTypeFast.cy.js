

describe('Hizli Text yazimi', () => {
    it('Hizli Text yazimi testi 01', () => {
        cy.visit('https://www.automationexercise.com/contact_us');
        cy.get('#message').type("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.We really appreciate your response to our website.")
    });

    it('Hizli Text yazimi testi 02', () => {
        cy.visit('https://www.automationexercise.com/contact_us');
        cy.get('#message').type("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.We really appreciate your response to our website.",{delay: 0})
    });
});