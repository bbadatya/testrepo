const {test, expect} = require('@playwright/test')

test('Mouse over action', async ({page})=>{


    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const selfPacedVideoCourse = await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[contains(text(),'Self Paced Video Course')]");
    const playwrightCourseCurriculam = await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[normalize-space()='Playwright Course Curriculum']");

    await selfPacedVideoCourse.hover();
    await playwrightCourseCurriculam.hover();

    await page.waitForTimeout(5000);

})