

describe('First Test with Cypress', () => {
   it('First Test AutomationExercise', () => {

    cy.visit('https://automationexercise.com/'); //BaseURL tanimlanmadi
    cy.title().should('eq','Automation Exercise');
    cy.url().should('eq','https://automationexercise.com/')

   });

   it('Second Test AutomationExercise', () => {

    cy.visit('https://automationexercise.com/'); // Ayni describe icinde oldugu icin yazmasamda olur
    cy.title().should('eq','Automation Exercise');
    cy.url().should('include','automationexercise.com/')

   });
});

