import { defineConfig } from 'cypress';
import { DEFAULT_TIMEOUT, CYPRESS_ASSETS_DIR_PATH } from './support/constants/constants';
import AllureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
    e2e: {
        specPattern: "cypress/integration/api/**/*.cy.ts",
        defaultCommandTimeout: DEFAULT_TIMEOUT,
        supportFile: "cypress/support/index.ts",
        videosFolder: `${ CYPRESS_ASSETS_DIR_PATH }/videos/api`,
        downloadsFolder: `${ CYPRESS_ASSETS_DIR_PATH }/downloads/api`,
        screenshotsFolder: `${ CYPRESS_ASSETS_DIR_PATH }/screenshots/api`,
        fixturesFolder: "cypress/fixtures",
        setupNodeEvents(on, config) {
            AllureWriter(on, config);
            return config;
        },
        env: {
            allure: true,
            allureResultsPath: `${ CYPRESS_ASSETS_DIR_PATH }/reporter/api/allure-report`
        }
    }
});