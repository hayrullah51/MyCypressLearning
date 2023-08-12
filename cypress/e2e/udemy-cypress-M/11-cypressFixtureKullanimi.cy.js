describe("Cypress Fixture Kullanimi", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("Cypress Fixture Data inValid Username validPassword", () => {
    cy.fixture("loginData").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login02(data.invalidUsername, data.validPassword);
    });
  });

  it("Cypress Fixture Data valid Username validPassword", () => {
    cy.fixture("loginData").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login02(data.validUsername, data.validPassword);
    });
  });
});
