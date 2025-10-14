const {test, expect} =  require('@playwright/test');

test('Multi select dropdowns', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        // select multi dropdowns in select option tag

        //await page.locator('#colors').selectOption('Blue', 'Red')

        //Assertions
        //1) check the no of options in the dropdown
        //const options = await page.locator('#colors option')
        //await expect(options).toHaveCount(7);

        // 2) check no of option susing JS array
        //const options = await page.$$('#colors option')
        //await console.log('The no of options present in the dropdown :', options.length)
        //await expect(options.length).toBe(7)

        //await page.waitForTimeout(5000);

        //3) Check the option is present in the dropdown 

        //const options = await page.locator('#colors').textContent()

        //await expect(options.includes('Yellow')).toBeTruthy();
        //await expect(options.includes('Purple')).toBeFalsy();

        //4) select dropdown values using loops

        /*const options = await page.$$('#colors option')
        let status = false;

        for(const option of options){

            let value = await option.textContent()
            if(value.includes('Green')){
                status = true
                break;
            }
        }

        await expect(status).toBeTruthy();*/

        // 5) select multi dropdown values using loops

        const options = await page.$$('#colors option')
        let status = false;

        for(const option of options){

            let value = await option.textContent()
            console.log(value)
            if(value.includes('White')){
                await page.selectOption('#colors', value)
                break;
            }
        }


        
        



})