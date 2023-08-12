 class HomepageSecomd {
    navigate() {
        cy.visit('https://www.cypress.io/')
        return this;
    }
    get pricingBtn() {
      return  cy.get('nav > div > ul > li:nth-child(5) > a')
    }
}

export default new HomepageSecomd()
//Bu yontem kullanilabilir