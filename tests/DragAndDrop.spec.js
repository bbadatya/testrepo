const {test, expect} = require('@playwright/test')

test('Drag and Drop action', async ({page})=>{


    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const sourceEle = await page.locator('#draggableElement');
    
    const destEle = await page.locator('#droppableElement');

    // Approach 1
    /* await sourceEle.hover()
    await page.mouse.down()
    await destEle.hover()
    await page.mouse.up() */

    //Approach 2
    await sourceEle.dragTo(destEle)

    // another website - not success - look into later
    /* await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    await page.locator("//li[@id='Accepted Elements']").click()

    const source1 = await page.locator("//div[@id='draggable']")
    const dest1 = await page.locator("//div[@id='droppable']")

    //await source1.hover()
    //await page.mouse.down()
    //await dest1.hover()
    //await page.mouse.up();
    source1.dragTo(dest1)*/

    await page.waitForTimeout(5000)

})