describe('Html Element Locate Etme', () => {
    cy.get('#user-name') // id Locate # ile
    cy.get('.login-box') // class Locate . ile
    cy.get('input') // tag locate etme
    cy.get('input[name="user-name"]') // attribute locate alma 
    // input tag'i altinda name'si user-nama olan elementin locate si
    cy.get('input[placeholder]:contains("Username")') // Text iceren element locate si
    // cy.get('input[placeholder='Username']') da olabilir
    cy.get('a:contains("Login")') // Text iceren element locate
    cy.get('a').contains("Login")
});