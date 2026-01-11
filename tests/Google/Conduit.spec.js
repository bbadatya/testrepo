const{test, expect} = require('@playwright/test')

test('Has a Title', async({page}) =>{

    
    await page.goto('https://conduit.bondaracademy.com/');
    const TitleLocator = await page.locator('.banner h1');

    //generic assertion
    const text = await TitleLocator.textContent();
    expect(text).toEqual('conduit');
    //locator assertion

    await expect(TitleLocator).toHaveText('conduit')




})