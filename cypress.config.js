const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jfhrc5",  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
