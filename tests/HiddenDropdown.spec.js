const {test, expect} = require('@playwright/test')

test('Locators Build-in', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {type:'submit'}).click();
    await page.locator("//span[normalize-space()='PIM']").click()
    await page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)").click()
    
    const dropdownOptions = await page.$$("//div[@role='listbox']//span")

    for(let options of dropdownOptions){
        const jobTitles = await options.textContent()
        console.log(jobTitles);
        if(jobTitles.includes('QA Engineer')){
            await options.click()
        }
        
    }

    await page.waitForTimeout(5000)
    




})