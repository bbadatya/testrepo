const {test, expect} =require('@playwright/test');

test('Google Page Validations', async({page}) =>{

await page.goto('https://www.google.com/');
await expect(page).toHaveURL('https://www.google.com/');
await page.locator("//div[@class='FPdoLc lJ9FBc']//input[@name='btnI']").click();
await expect(page).toHaveTitle("Google Doodles - Google’s Search Logo Changes for Every Occasion");
await page.locator("//a[@aria-label='Places']").click();
await page.waitForLoadState();

await page.locator("//input[@name='title_like']").fill('Test');
await page.waitForTimeout(5000)
await page.locator("//span[text()='Search']").click();
await page.waitForTimeout(5000)
await expect(page.locator("//img[@alt='Lebanon Independence Day 2024']")).toBeVisible();


})