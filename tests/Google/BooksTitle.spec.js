const {test, expect} = require('@playwright/test');

test('Verify Book and Title and Price tag', async({page}) =>{

    await page.goto('https://books.toscrape.com/');

    const books = await page.locator('.product_pod');
    //await expect(books.count()).toBe(20);
    const firstBook = books.first();

    await page.waitForSelector("//img[@alt='A Light in the Attic']")
    await firstBook.click();

    //await expect(firstBook).toBeTruthy();

    //await page.getByTitle("A Light in the Attic").isVisible();
    //await page.locator('.price_color').nth(0).isVisible();
    //await page.locator('.star-rating').nth(0).isVisible();


})