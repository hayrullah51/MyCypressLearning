describe("Cypress Session Kullanimi", () => {
  beforeEach(() => {
    const username = "deneme5151@gmail.com";
    const password = "a5151.";
    cy.loginWithSession(username, password);
  });
  it.skip("Siteye git ve bir makale ekle -1", () => {
    cy.visit("https://react-redux.realworld.io/");
    cy.contains("New Post").click();
    cy.get("div#main fieldset:nth-child(1) > input").type("Deneme TITLE");
    cy.get("div#main fieldset:nth-child(2) > input").type("Deneme ABOUT");
    cy.get("div#main textarea").type("Deneme TEXT AREA");
    cy.get("div#main fieldset:nth-child(4) > input").type("Deneme TAG");
    cy.get("div#main fieldset:nth-child(4) > input").click();
    cy.contains("Edit Article").should("be.visible");

  });
});
