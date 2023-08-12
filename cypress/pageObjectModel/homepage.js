export class Homepage {
    navigate() {
        cy.visit('https://www.cypress.io/')
        return this;
    }
    pricingBtn() {
        cy.get('nav > div > ul > li:nth-child(5) > a').click()
    }
}

// Bunu test classinda kullanmak icin
//import { Homepage } from "../../pageObjectModel/homepage";
// const homepagePom = new Homepage() seklinde yazmak gerekir