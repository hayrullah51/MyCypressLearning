describe("Web Scrapping", () => {
  it("Write file to txt for products", () => {
    cy.step('shopist.io Sayfasina gidiyor')
    cy.visit("https://www.shopist.io/department/chairs");
    cy.step('Sandalya Fiyatlari ve sayisi')
    cy.get(".description").as("chairsPrice").its("length").should("eq", 9);
    const results = [];
    cy.step('Sonuclari Logluyoruz:')
    cy.get('@chairsPrice').each(($el, index) => {
        
        cy.log("Results: "+ index + " _  " + $el.text())
        results.push($el.text())
    }).then(() => {
        cy.step('Sonuclari chairsPrice dosyasina yazdiriyoruz')
        cy.writeFile('CypressWriteFileDoc/chairsPrice.txt', results)
    })
  });
});
