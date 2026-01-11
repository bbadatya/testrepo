const {test, expect} = require('@playwright/test');

test('Verify Book and Title and Price tag', async({page}) =>{


    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').getByTitle('Search for Products, Brands and More')
    // await page.getByPlaceholder('Search for Products, Brands and More').fill('Books')
    // await page.getByRole('button', {name:'search'}).click()
    // const bookTitles = await page.locator("//a[@class='pIpigb']").allTextContents()
    // console.log(bookTitles)
    await page.getByPlaceholder('Search for Products, Brands and More').fill('Phones')
    await page.getByRole('button', {name:'search'}).click()
    await page.waitForSelector('div>label>div')
    const phoneNames = await page.$$('div>label>div')


    for(let phone of phoneNames){
        const values = await phone.textContent();
        //console.log('The values are ', values)
        if(values.includes('Apple')){
            await phone.click()
            break;

        }
    }
    await page.waitForTimeout(5000)
    await page.waitForSelector("//div[contains(text(),'Apple iPhone')]")

    const allPhoneItems = await page.$$("//div[contains(@class, 'RG5Slk')]")

    

    for(const phoneItems of allPhoneItems){
        const phoneBB = await phoneItems.textContent();
        console.log("The values are :", phoneBB)
        if(phoneBB.substring('Apple iPhone')){
            await expect(phoneBB).toBeTruthy();
        }

    }
    // const totalCount = await allPhoneItems.count();

    // await expect(totalCount).toBe(24)
    // const visiblePhoneItems = allPhoneItems.filter({visible:true})

    // await expect(visiblePhoneItems).toHaveCount(totalCount, {timeout:10000})

    // console.log('Total phones found:',totalCount);
    // const visibleItemList = await visiblePhoneItems.all()
    // for(const items of visibleItemList){

    //     await expect(items).toBeVisible();
    // }

    //console.log(bookTitles)


    // for(const book of bookTitles)
    // {
    //     await expect(book).toContain('Khan Sir Pocket GK General Knowledge (Samanya Gyan) By ...')
    // }
    await page.waitForTimeout(10000);


})