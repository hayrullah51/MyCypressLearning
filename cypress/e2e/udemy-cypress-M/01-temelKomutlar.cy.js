

describe("Temel Komutlar", () => {
  it("Temel Komutlar cy.visit kullanimi", () => {
    cy.visit("/"); // baseURL tanimlandi ise sadece / koymamiz yeterli

    cy.visit("/commands/actions"); // baseURL tanimlandi ise path belirtmek yeterli

    cy.visit("https://example.cypress.io/commands/actions"); // baseURL tanimlanmadi ise boyle kullaniyoruz

    cy.visit({
      url: "https://example.cypress.io/commands/actions", //basewURL tanimlandi ise / yeterli!
      method: "GET",
    });
  });

  it("Temel Komutlar cy.title Kullanimi", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    //cy.title().should('eq',"Cypress") //title tam esit ise dogrular
    cy.title().should('include',"Cypress") // title icerisinde aranan ifade varsa dogrular
    cy.title().should('contain',"Cypress") // title icerisinde aranan ifade varsa dogrular
    
  });

  it('Temel Komutlar cy.url ve cy.location Kullanimi', () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.url().should('eq', 'https://example.cypress.io/commands/actions') // URL tam esitlik olursa dogrular
    cy.url().should('include', 'commands') // URL icerisinde aranan ifade varsa dogrular

    cy.location('pathname').should('eq','/commands/actions') // gidilen path'i dogrulamaya yarar
    cy.log('Temel komut cy.log Kullanimi yazdirma')
    cy.location('protocol').should('eq', 'https:') //gidilen protokolu dogrular
    cy.location('hostname').should('eq','example.cypress.io') // tam esitlikle dogrular
    cy.location('hostname').should('include','cypress.io') // aranan ifade varsa dogrular
  });

  it.skip('Temel Komutlar cy.get Kullanimi', () => {
    cy.get("#button"); // dogru kullanim
    cy.get('#button').as('deneme'); // cy.get('@deneme')
    cy.get('a[href="example.cypress.io"]');
    cy.get('.dropdown-menu-list');
    cy.get('ul li:first');
    cy.get('div.button').should;
  });

  it('Temel Komutlar cy.log Kullanimi', () => {
    cy.log('Temel komut cy.log Kullanimi yazdirma')
    cy.log('be.visible')
    cy.log('Bir Mesaj', ['Bir mesaj', 'Iki mesaj','uc mesaj'])
  });
});
