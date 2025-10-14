const {test, expect} = require('@playwright/test')

test('Radio buttons and checkboxes', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    await page.locator('#male').check(); // male radio button
    await expect(await page.locator('#male')).toBeChecked()
    //OR
    await expect(await page.locator('#male').isChecked()).toBeTruthy();// isChecked() returns true, if it is true, then compare with expected result with true or not

    await expect(await page.locator('#female').isChecked()).toBeFalsy();//female radio button

    await page.waitForTimeout(5000)
    await page.close()





})