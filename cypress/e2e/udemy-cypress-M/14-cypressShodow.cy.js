
describe('Shadow and Find() kullanimi', () => {

    
    before(() => {
        cy.on('uncaught:exception',(err, Runnable) => {return false})
        //uncaught exception hatasi aliyorsak bu satiri kullaniyoruz
    });
    
    it('Shadow and find() kullanikm Test', () => {
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html?group=all&subgroup=all.saloon&view=BODYTYPE');

        //click on the 'Agree to all' button
        cy.get("cmm-cookie-banner[settings-id='fph8XBqir']").shadow()
        .find('cmm-buttons-wrapper[class="hydrated"]')
        .find("wb7-button[data-test='handle-accept-all-button']")
        .should('be.visible')
        .contains('Agree to all').click()

    });
});