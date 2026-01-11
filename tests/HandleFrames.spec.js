const {test, expect} = require('@playwright/test');

test('Handle frames', async ({page}) => {

   // await page.goto('https://ui.vision/demo/webtest/frames/')

    //const totalFrames = page.frames();

    //console.log('Total frames present :', totalFrames.length);

    //1) handle frames using name and URL frame objects

    //const frame1 = await page.frame('name') if name is present
    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill("input[name='mytext1']", 'Hello');

    //2) handle frames using framelocator

    //const framePrsence = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    //await framePrsence.fill('Hello')
    //const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
    //frame2.locator("//input[@name='mytext2']").fill("Hello 2")
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    await page.locator("//li[@id='iFrame']").click()
    
    //const frameEle = await page.frame('globalSqa')
    
    // Using frameLocator approach

    //await frameEle.locator("//div[@id='mobile_menu_toggler']").click()
    page.frameLocator("//iframe[@data-src='https://www.globalsqa.com/trainings/']").locator("//div[@id='mobile_menu_toggler']").click()
    await page.waitForTimeout(5000)


})