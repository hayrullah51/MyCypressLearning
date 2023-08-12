describe("Alias, Then, Each, Wrap kullanim ornegi", () => {
  it("Kullanim Ornegi 01", () => {
    let itemLength;
    cy.visit("https://www.shopist.io/");
    cy.get(".navbar-section a").as("NavbarMenus"); // Alias Ornek
    cy.get("@NavbarMenus")
      .then(($el) => {
        itemLength = $el.length;
      })
      .each(($el, index) => {
        //cy.log($el.text())
        cy.get("@NavbarMenus").should("be.visible");
        cy.log("Navbar Menu " + index + ": " + $el.text());
        

        if ($el.text().includes("Cart")) {
          cy.wrap($el).click();
        }
      });
  });
});
