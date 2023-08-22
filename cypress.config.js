const { defineConfig } = require("cypress");
const { removeDirectory } = require("cypress-delete-downloads-folder");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  viewportHeight: 1200,
  viewportWidth: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { removeDirectory });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      hidexhr: true,
      amazon: "https://www.amazon.com",//dec enviroment
      google:"https://www.google.com",//staging env
      saucedemo:"https://www.saucdemo.com"
    },
    specPattern:'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalWebKitSupport: true, // Safari'de test kosmak icin
    experimentalRunAllSpecs: true, // Tum spec'leri ayni anda yada dosya dosya run etmek icin
    watchForFileChanges: false, // testimin her degisiklikte (otomatik olarak) hemen ard arda test etmesini durdurmak icin
    baseUrl: "https://example.cypress.io/",
  },
});
