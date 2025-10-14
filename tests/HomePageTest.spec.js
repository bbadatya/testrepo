const {test, expect} = require('@playwright/test/');
// OR another way to import playwright module
import {test, expect} from '@playwright/test'

test('Home Page', async ({page}) =>{

    await page.goto('https://www.demoblaze.com/');
    const pageTitle = page.title();
    console.log('Page Title is : '+pageTitle);
    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL is :' ,pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    page.close();

    //because nature of javascript is asyncronous, async keyword will make the function and return a promise but await keyword wait for a promise

    // npx playwright test -----> run all tests on all browsers in headless mode
    // npx playwright test myTest.spec.js -----> runs a specific test file
    // npx playwright test myTest.spec.js --project=chromium  -----> runs on a specific browser
    // npx playwright test myTest.spec.js --project=chromium --headed
    // npx playwright test myTest.spec.js --project=chromium --headed --debug -----> in debug mode

})