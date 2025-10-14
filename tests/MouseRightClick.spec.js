const {test, expect} = require('@playwright/test')

test('Mouse right click action', async ({page})=>{


    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const rightClick = await page.locator("//button[@id='rightclick']");
    
    await rightClick.click({button:'right'})// right click action

    await page.waitForTimeout(5000);

})