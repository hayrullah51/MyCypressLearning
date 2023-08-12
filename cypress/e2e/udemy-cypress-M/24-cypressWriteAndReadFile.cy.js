describe("Cypress Write File", () => {
  it("Write File Test -1", () => {
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Sifirdan Cypress derslerine Hos Geldiniz"
    );
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Bu egitim serisinde 0 dan ileri seviyeye Cypress ogreneceksiniz",
      { flag: "a+" }
    );
  });
});

describe("Cypress Read File", () => {
  it("Read File Test -1", () => {
    cy.readFile("CypressWriteFileDoc/exampleFile.txt").should('contain','Cypress')
  });
  it("Read File Test -2", () => {
    cy.readFile("CypressWriteFileDoc/exampleFile.txt").then((text) => {
        expect(text).to.contain('egitim')
    })
  });
});
