import { defineConfig } from "cypress";

export default defineConfig({
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    },
    e2e: {
        baseUrl: 'https://example.cypress.io',
        setupNodeEvents(on, config) {
        }
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
