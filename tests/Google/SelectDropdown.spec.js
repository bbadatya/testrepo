const {test, expect} = require('@playwright/test');

test('Dropdown with select tag', async ({page}) =>{

await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
await page.selectOption("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']")
await page.waitForSelector("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']")



})