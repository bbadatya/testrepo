const {test, chromium} = require('@playwright/test');
//const path = require('path');


const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

test('Launching URL', async({page}) =>{

await page.goto('https://www.google.com');
await page.locator('#APjFqb').fill('United States');
await page.getByRole("button",{ name :'Google Search'}).click();

})