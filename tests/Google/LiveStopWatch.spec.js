const{test, expect} = require('@playwright/test')

test('Live stop watch', async({page}) =>{

    
    await page.goto('https://www.google.com/');
    const button = await page.locator("//textarea[@name='q']").fill('stop watch online')
    await page.getByRole('button', { name: 'Start' }).click();

    await page.locator("//div[@aria-label='Pause']").first().click();
    const text = await page.locator('.KxibG>div').innerText();

    //await element.waitFor({ state: 'visible' })
    //await page.locator('.article-hero__h1').waitFor({ state: 'visible' });

    console.log('the displayed time is :',text)



    

    //await expect(button).toHaveText('Check it out')




})