### Env:
Node v12.22.5 <br />
Npm v7.5.2

---

```Enter the following commands at the command line while in the root directory of the project (where the package.json file is located.)```

### Install project dependencies:
`npm i` from root directory.

### Run test scripts:
#### e2e:
- `npm run cy-e2e:open` for run end-to-end tests with browser's options.
- `npm run cy-e2e:run` for run end-to-end tests with headless mode.

#### e2e report:
1. `npm run cy-e2e:run` for prepare data for report;
2. `npm run cy-e2e:allure` for generate report.

#### api:
- `npm run cy-api:run` for run tests api with headless mode.

#### api report:
1. `npm run cy-api:run` for prepare data of report;
2. `npm run cy-api:allure` for generate report.

#### unit:
`npm run cy:open` for run unit tests.

#### unit nyc:
`npm run cy:nyc` for check coverage.

