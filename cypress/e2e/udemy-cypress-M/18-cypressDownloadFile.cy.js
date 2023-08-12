describe("Cypress Download File", () => {
  before(() => {
    cy.deleteDownloadsFolder();
  });
  it("Download File Test", () => {
    cy.on("uncaught:exception", (err, runable) => {
      return false;
    });
    cy.visit("https://demoqa.com/upload-download");

    cy.get("#downloadButton").click(); //1. yontem
    cy.get(".btn-primary").click(); //2. yontem
    /*
    https://www.npmjs.com/package/cypress-downloadfile
    adresinden eklenti indirip de dosya indirilebilinir

    npm install cypress-downloadfile ->> terminale yazilir
    require('cypress-downloadfile/lib/downloadFileCommand') -> command.js
    config.js'e bu da eklenir
    ________________________________________________________
    const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
         on('task', {downloadFile})
      })
    }
  }
})

sonra su sekilde kullanima acik :)
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
________________________________________________________


    */
  });
});
