const {test, expect} =require('@playwright/test');

test('Google Page Validations', async({page}) =>{

await page.goto('https://www.google.com/');
await expect(page).toHaveURL('https://www.google.com/');
await page.getByRole('button', {name:"I'm Feeling Lucky"}).click();
//await page.locator("//div[@class='FPdoLc lJ9FBc']//input[@name='btnI']").click();
await expect(page).toHaveTitle("Google Doodles - Google’s Search Logo Changes for Every Occasion");
await page.locator("//a[@aria-label='Places']").click();
await page.waitForLoadState();

//await page.locator("//input[@name='title_like']").fill('Test');
await page.getByPlaceholder('Search Doodles').fill('Test')
await page.waitForSelector("//span[text()='Search']")
await page.getByRole('button', {name:'Search'}).click({force:true});
//await page.locator('.search-doodle__box-button_search-input').click({force:true});

const doodlecards = await page.$$("//div[@class='doodle-card-content']//p[2]")

for(const cards of doodlecards){
    let doodle_card_content = await cards.textContent()

    if(doodle_card_content.includes('Lebanon Independence Day 2024')){
        //await toOpt.click();
        await expect(doodle_card_content).toBeVisible();
        break;
}
}
//await expect(page.getByText('Lebanon Independence Day 2024')).toBeVisible();


})