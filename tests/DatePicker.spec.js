const {test, expect} = require('@playwright/test')

test('Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //using direct fill method
    //await page.fill('#datepicker', '09/30/2025');

    // using date picker

    

    let year ='2025'
    let month='December'
    let date='30'

    await page.click('#datepicker')

    while(true){

        let currentYear=await page.locator('.ui-datepicker-year').textContent()
        let currentMonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentYear==year && currentMonth==month){
            break;
        }

        await page.locator("[title='Next']").click()
        
    }
//date selection using loops

    //const dates = await page.$$('.ui-state-default')

    /*for(const dt of dates){
        if( await dt.textContent()==date){
            await dt.click()
            break;
        }
    }*/

        //using without date loop
    
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(10000)

});
