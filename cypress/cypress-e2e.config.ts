import { defineConfig } from 'cypress';
import { DEFAULT_TIMEOUT, CYPRESS_ASSETS_DIR_PATH } from './support/constants/constants';
import AllureWriter from "@shelex/cypress-allure-plugin/writer"

export default defineConfig({
    e2e: {
        specPattern: "cypress/integration/e2e/**/*.cy.ts",
        defaultCommandTimeout: DEFAULT_TIMEOUT,
        supportFile: "cypress/support/index.ts",
        videosFolder: `${ CYPRESS_ASSETS_DIR_PATH }/videos/e2e`,
        downloadsFolder: `${ CYPRESS_ASSETS_DIR_PATH }/downloads/e2e`,
        screenshotsFolder: `${ CYPRESS_ASSETS_DIR_PATH }/screenshots/e2e`,
        fixturesFolder: "cypress/fixtures",
        viewportWidth: 1200,
        viewportHeight: 1200,
        setupNodeEvents(on, config) {
            AllureWriter(on, config);
            return config;
        },
        env: {
            allure: true,
            allureResultsPath: `${ CYPRESS_ASSETS_DIR_PATH }/reporter/e2e/allure-report`
        }
    }
});