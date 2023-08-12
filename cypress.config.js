const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { removeDirectory })
    },
    env: {
hidexhr: true
    },
    baseUrl: "https://example.cypress.io/"
  },
});
