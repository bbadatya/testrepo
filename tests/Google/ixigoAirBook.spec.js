const{test, expect} = require('@playwright/test')

test('Searching and Booking for a flight', async({page}) =>{

    await page.goto('https://www.ixigo.com/');
    //await page.locator("//label[text()='From']").click();
    //await page.locator('body > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').pressSequentially('Bhubaneswar')
    await page.screenshot({path :'tests/Google/'+Date.now()+'fullpage.png', fullPage:true})

})