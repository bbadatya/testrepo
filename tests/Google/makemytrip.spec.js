const{test, expect} = require('@playwright/test')

test('Handling different types dropdowns ', async({page}) =>{

    //handling auto suggestion dropdown

    await page.goto('https://www.makemytrip.com/flights/');
    await page.locator('#fromCity').click();
    await page.getByPlaceholder('From').fill('BBI');
    await page.waitForSelector("text=Bhubaneswar, India");
    await page.click("text=Bhubaneswar, India");
    await expect(page.locator('label>p>span').nth(0)).toHaveText('BBI, Biju Patnaik International Airport India');

    //select custome dropdown values

    // await page.goto('https://admirhodzic.github.io/multiselect-dropdown/demo.html');
    // await page.locator('.multiselect-dropdown').first().click();
    // await page.locator('.multiselect-dropdown-list label').nth(1).click("text=Audi");
    // await page.locator('.multiselect-dropdown-list label').nth(1).click("text=Volvo");

    // Multi select select dropdown

    // await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');
    // await page.selectOption('#select-multiple-native', ["Fjallraven - Foldsac...","Mens Cotton Jacket..."]);



})