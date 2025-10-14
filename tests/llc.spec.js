const {test, expect} = require('@playwright/test');


test('Special locators in Playwright', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();

        page.goto("https://rahulshettyacademy.com/angularpractice/");
        await page.getByLabel("Check me out if you Love IceCreams!").click();
        await page.getByLabel("Employed").click();
        // or we can write await page.getByLabel("Employed").check();
        await page.getByLabel("Gender").selectOption("Female");

        // to run Playwright UI Runner command is - npx playwright test tests/llc.spec.js --ui

        await page.getByPlaceholder("Password").fill("abc123");
        await page.getByRole("button",{name :'Submit'}).click();
        await page.getByText(" The Form has been submitted successfully!.").isVisible();
        await page.getByRole("link", {name :"Shop"}).click();

        // click on add to cart button in advance way
        await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();



    });