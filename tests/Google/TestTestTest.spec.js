const {test, expect} = require('@playwright/test');

test('Google Page', async ({page}) =>{


    await page.goto('https://aerolens.net/');
    await expect(page).toHaveURL('https://aerolens.net/')
    const logo = await page.locator('#nt-logo');
    await page.locator("nav[id='top-bar__navigation'] li[id='mega-menu-item-22727'] a[class='mega-menu-link']").click();
    await expect(page).toHaveURL('https://aerolens.net/careers/');
    

    await expect(logo).toBeVisible();


})
