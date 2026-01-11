// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { on } from 'events';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect: {
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries:0,
  /* Opt out of parallel tests on CI. */
  workers:2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  //reporter:[['json', {  outputFile: 'test-results.json' }]],
  //reporter: [['junit', { outputFile: 'results.xml' }]],
  /*reporter: [
             //['list'],
             //['html'],
             //['junit', { outputFile: 'results.xml' }],
             //['json', { outputFile: 'results.json' }],
             //['json', { outputFile: 'results.json' }],
             ['allure-playwright', { outputFolder: 'my-allure-results' }],
            ],
            



  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',// firefox or webkit
    headless : true, //always run in local browser(in headed mode)
    screenshot:"only-on-failure",
    video:"retain-on-failure",
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace:"on",
    // for to trace failed test cases - trace :'retain-on-failure'
    // for to trace every test cases - trace :'on'
    // first retry of each cases - trace :'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
module.exports=config

