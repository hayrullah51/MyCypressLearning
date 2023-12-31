describe('Cypress Clear Cookies', () => {
    it('Dosya yukleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {
            cy.log(localStorage.length)
            cy.log(window.localStorage.length)

            localStorage.setItem('cypress dersleri icin', 'deneme test')
            cy.wait(3000).then(() => {
                localStorage.removeItem('cypress dersleri icin', 'deneme test')
            })

            cy.wait(3000).then(() => {
                localStorage.clear()
            })
        })
       
    });

    it.only('Dosya yukleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {
         cy.wait(5000)
         cy.clearLocalStorage()
        })
       
    });

    
});