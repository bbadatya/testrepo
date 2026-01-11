const{test, expect} = require('@playwright/test')

test('Inner Text Vs TextContent', async({page}) =>{

    
    /*await page.goto('https://practice.expandtesting.com/hovers');
    await expect(page).toHaveURL('https://practice.expandtesting.com/hovers');
    await expect(page).toHaveURL(/.*hovers/);
    await page.getByTestId('img-user-1').hover();
    const innerTEXXT = await page.locator('h5').first().innerText();
    console.log(innerTEXXT);
    const textCont = await page.locator('.figcaption a').first().textContent();
    console.log(textCont);*/

    await page.goto("https://google.com/");
    await page.locator(".gLFyf").first().fill("car");
    await page.getByRole('button', {name:"Google Search"}).click();

    await page.waitForTimeout(100000)
    //await page.waitForSelector("#_9XFfaen2FNu74-EP_art2A4_53");
    await page.locator("a>h3").first().click();
    await expect(page).toHaveURL('https://www.carwale.com/new-cars/')
    //const parentLocator = page.locator('h3').filter({ has: page.getAttribute('')});
    //await parentLocator.click();
    




    

    //await expect(button).toHaveText('Check it out')




})