const {test, expect} = require('@playwright/test');

test('Checkboxes examples', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        // select single checkbox
        await page.locator("//input[@type='checkbox' and @id='sunday']").check()
        await expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked()
        await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy()
        await expect(await page.locator("//input[@type='checkbox' and @id='monday']").isChecked()).toBeFalsy()
        await page.waitForTimeout(3000)
        await page.locator("//input[@type='checkbox' and @id='sunday']").uncheck();


        // multiple checkboxes
        const checkboxesLocators = [
                        "//input[@type='checkbox' and @id='sunday']",
                        "//input[@type='checkbox' and @id='saturday']",
                        "//input[@type='checkbox' and @id='wednesday']"


        ]

        for(const locator of checkboxesLocators){

            await page.locator(locator).check();
            await expect(await page.locator(locator)).toBeChecked()
            await expect(await page.locator(locator).isChecked()).toBeTruthy()
            

        }
        await page.waitForTimeout(5000)

        // unselect multiple checkboxes

        for(const locator of checkboxesLocators){

            if(page.locator(locator).isChecked())
            
            {
                await page.locator(locator).uncheck();
            }

        await expect(await page.locator(locator).isChecked()).toBeFalsy()

    }
        await page.waitForTimeout(3000) // pause execution to view


})
