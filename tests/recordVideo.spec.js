const {test, expect} =  require('@playwright/test')

test('Record Video', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.fill('#loginusername', 'admin')
    await page.fill('#loginpassword', 'admin')
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.waitForSelector('#logout2')
    await page.locator('#logout2').click()
    await page.waitForTimeout(5000)


})