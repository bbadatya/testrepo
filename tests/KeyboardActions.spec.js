const {test, expect} = require('@playwright/test')

test('Keyboard action', async ({page})=>{


    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Welcome to automation')

    // or
    //await page.fill('[name="text1"]', 'Welcome to automation')

    // Keyboard actions Ctrl+A
    // Ctrl+C
    //Tab
    //Ctrl+V
    await page.keyboard.press('Meta+A') // for windows Ctrl+A
    await page.keyboard.press('Meta+C')
    //await page.keyboard.press('Tab')
    // OR
    await page.keyboard.down('Tab')
    //await page.keyboard.up('Tab')
    await page.keyboard.press('Meta+V')


    await page.waitForTimeout(5000)

})

