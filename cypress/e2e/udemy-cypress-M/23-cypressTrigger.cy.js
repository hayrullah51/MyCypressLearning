describe('Trigger Kullanimi', () => {
    it('mouseover kullanimi -1 ', () => {
        cy.visit('https://www.amazon.com/');
        cy.get('a#nav-link-accountList > span').trigger('mouseover');
        cy.get('div#nav-flyout-ya-signin span').click();
    });

    it.only('mouseover kullanimi -2 ', () => {
        cy.visit('https://www.amazon.com/');
       // cy.get('a#nav-link-accountList > span').trigger('mousedown', {button:0}); //mouse'nin sol tiklamasi icin
       // cy.get('a#nav-link-accountList > span').trigger('mousedown', {button:1}); //mouse'nin orta tiklamasi icin
       // cy.get('a#nav-link-accountList > span').trigger('mousedown', {button:2}); //mouse'nin sag tiklamasi icin
        cy.get('a#nav_prefetch_yourorders > span').click();
    });
});