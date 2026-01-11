const {test, expect} = require('@playwright/test')

test('Amazon eCommerce and Search for iPhone', async ({page})=>{

await page.goto('https://www.amazon.in/');
await page.locator('#twotabsearchtextbox').fill('Phones');
await page.locator('#nav-search-submit-button').click();

const brands = await page.$$("//div[@id='brandsRefinements']//span[@class='a-size-base a-color-base']")

for(const brand of brands){
    let brandnames = await brand.textContent();
    await expect(brandnames).toBe(21)
    console.log(brandnames);
    if(brandnames.includes('Apple')){
        await page.locator("//span[@class='a-size-base a-color-base' and text()='Apple']//preceding-sibling::div//child::input").click();
    }
    
}

await page.waitForTimeout(5000)
//await page.waitForSelector("//span[text()='Brands']")

//await page.locator("a[aria-label='Apply the filter Apple to narrow results'] i[class='a-icon a-icon-checkbox']").click();

//await page.locator("")

//await expect(page.locator("//h2[@aria-label='iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Teal']//span[contains(text(),'iPhone 16 128 GB: 5G Mobile Phone with Camera Cont')]")).toBeVisible();





})