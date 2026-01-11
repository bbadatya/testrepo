const{test, expect} = require('@playwright/test')

test('Has a Title', async({page}) =>{

    
    await page.goto('https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header');
    const button = await page.locator('.cta-container a').first().click();

    const element = await page.locator('.article-hero__h1');
    await element.waitFor({ state: 'visible' })
    //await page.locator('.article-hero__h1').waitFor({ state: 'visible' });

    await expect(page.locator('.article-hero__h1')).toHaveText('Gemini 3 Flash: frontier intelligence built for speed')



    

    //await expect(button).toHaveText('Check it out')




})