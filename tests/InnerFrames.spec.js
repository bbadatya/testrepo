const {test, expect} = require('@playwright/test');


test('Inner Frames', async({page}) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.fill("input[name='mytext3']", "Welcome")

    const childFrames = frame3.childFrames()
    console.log("The no of child frames present inside frame3 :", childFrames.length) //1
    await childFrames[0].locator("//*[@id='i6']/div[3]/div").check()

    await page.waitForTimeout(5000)


})