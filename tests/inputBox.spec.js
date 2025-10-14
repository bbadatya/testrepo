const {test, expect} = require('@playwright/test');

test('Input Box Testcase', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(await page.locator('#name')).toBeVisible()
    await expect(await page.locator('#name')).toBeEditable()
    await expect(await page.locator('#name')).toBeEnabled()
    await expect(await page.locator('#name')).toBeEmpty()


    //await page.getByPlaceholder('Enter Name').fill('Bikram');
    //OR
    await page.fill('#name', 'Bikram');

    await page.waitForTimeout(5000); // pause code


    await page.close();





})
