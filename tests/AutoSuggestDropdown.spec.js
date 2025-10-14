const {test, expect} = require('@playwright/test');

test('Auto suggest dropdown handles', async({page})=>{

    await page.goto('https://www.easemytrip.com/')

    await page.locator("#FromSector_show").click();

    await page.locator('#a_FromSector_show').fill('Delhi')
    await page.waitForSelector('li>div>div>p>span')

    const fromOptions = await page.$$('li>div>div>p>span')

    for(let option of fromOptions)
    
    {
        const value = await option.textContent()
        //console.log('The cities names are :'+value);
        if(value.includes('Goa(GOI)')){
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000)

    await page.locator('#a_Editbox13_show').pressSequentially('Bhubaneswar')
    await page.keyboard.down('Enter');

    await page.waitForSelector('div.fromsectr>div#toautoFill>ul>li>div>div>p>span')

    const toOptions = await page.$$('div.fromsectr>div#toautoFill>ul>li>div>div>p>span')

    for(const toOpt of toOptions){
        let tocities = await toOpt.textContent()

        if(tocities.includes('Bhubaneswar(BBI)')){
        await toOpt.click();
        break;
    }

    }

})