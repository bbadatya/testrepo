const {test, expect} = require('@playwright/test')

test('Mouse Double Click action', async ({page})=>{


    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const dblClickBtn = await page.locator("//button[@id='dblclick']");
    
    await dblClickBtn.dblclick();

    
    
    const text = await page.locator("//p[@id='demo']")

    await expect(text).toHaveText('Double Click Action is Performed')

    // OR in a singel sentence
    //await expect(await page.locator("//p[@id='demo']")).toHaveText("Double Click Action is Performed");
    
    await page.waitForTimeout(5000);

})