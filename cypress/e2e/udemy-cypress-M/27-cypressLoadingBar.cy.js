describe('Loading bar ', () => {
    it('Loading Bar Test -1', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.get('div#start > button').click()
        cy.get('#loading',{timeout: 10000}).should('have.attr','style','display: none;')
        cy.get('div#finish > h4').should('be.visible').and('contain','Hello World!')
    });
});