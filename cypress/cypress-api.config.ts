import { defineConfig } from 'cypress';
import { DEFAULT_TIMEOUT, CYPRESS_ASSETS_DIR_PATH } from './support/constants/constants';

export default defineConfig({
    e2e: {
        specPattern: "cypress/integration/api/**/*.cy.ts",
        defaultCommandTimeout: DEFAULT_TIMEOUT,
        supportFile: "cypress/support/index.ts",
        videosFolder: `${ CYPRESS_ASSETS_DIR_PATH }/videos`,
        downloadsFolder: `${ CYPRESS_ASSETS_DIR_PATH }/downloads`,
        screenshotsFolder: `${ CYPRESS_ASSETS_DIR_PATH }/screenshots`,
        fixturesFolder: "cypress/fixtures",
        viewportWidth: 1200,
        viewportHeight: 1200
    }
});