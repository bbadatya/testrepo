//const {test, expect} = require('@playwright/test')
//OR
import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html');
    // click on login button - property
    //await page.locator('id=login2').click();
    await page.click('id=login2')

    // provide CSS
    //await page.locator('#loginusername').fill('Admin');
    await page.fill('#loginusername', 'Admin')

    //Proovide Xpath
    await page.locator("//input[@id='loginpassword']").fill('admin')
    await page.locator("//button[normalize-space()='Log in']").click()

    // verify logout presence

    const logoutLink = page.locator('a#logout2')

    await expect(logoutLink).toBeVisible();

    const links = await page.$$('a');

    for(const link of links)
    {
            const linkText = await link.textContent();
            console.log(linkText);
    }
    page.waitForSelector("//div[@id='tbodyid']//h4");
    const products = await page.$$("//div[@id='tbodyid']//h4");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }

    await page.close()

})