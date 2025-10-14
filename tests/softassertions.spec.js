const {test, expect} = require('@playwright/test')

test('Soft Assertions test', async({page}) => {

    
    // Hard Assertions
    /*await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    //const productStore = await page.locator("//a[@id='nava']")
    await expect(await page.locator("//a[@id='nava']")).toBeVisible();*/


    // soft assertions 

    await page.goto('https://www.demoblaze.com/index.html')
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    //const productStore = await page.locator("//a[@id='nava']")
    await expect.soft(await page.locator("//a[@id='nava']")).toBeVisible();

})