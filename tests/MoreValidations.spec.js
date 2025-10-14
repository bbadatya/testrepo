const {test, expect} = require('@playwright/test');


test('POPUps validations', async ({page})=>
    {

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        // await page.goto("https://www.google.com/");
        // await page.goBack();
        // await page.goForward();
        await expect (page.locator("#displayed-text")).toBeVisible();
        await page.locator("#hide-textbox").click();
        await expect (page.locator("#displayed-text")).toBeHidden();

        //page.pause();

        // handling Java script dialog(Alert) box either you can accept or dismiss, these are called events. we are directing to playwright , GO and do this dialog action
        page.on('dialog',dialog => dialog.accept());

        await page.locator("#confirmbtn").click();
        await page.locator("#mousehover").hover();

        const framesPage = page.frameLocator("#courses-iframe");
        await framesPage.locator("li [href*='lifetime-access']:visible").click();
        const ReceivedStr = await framesPage.locator(".text h2").textContent();
        console.log(ReceivedStr.split(" ")[1]); 


    });

    test('Screenshot and Visual comparisons', async ({page})=>{

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await expect (page.locator("#displayed-text")).toBeVisible();
        await page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'}); 
        await page.locator("#hide-textbox").click();
        await page.screenshot({path:'screenshot.png'});
        await expect (page.locator("#displayed-text")).toBeHidden();

    });

    test.only('Visual', async ({page})=>{

        await page.goto("https://www.google.com/");
        expect(await page.screenshot()).toMatchSnapshot('landing.png');
        

    });