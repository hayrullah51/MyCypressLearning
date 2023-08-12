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
    baseUrl: "https://example.cypress.io/",
  },
});
