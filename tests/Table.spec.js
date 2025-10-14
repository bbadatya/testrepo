const{test, expect} = require('@playwright/test')

test('Pagination WEB Table Reading', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const tables = await page.locator('#productTable')
    const rows = tables.locator('tbody tr')
    console.log('The no of rows :', await rows.count())
    expect(await rows.count()).toBe(5)


    const columns = tables.locator('thead tr th')
    console.log('The no of columns :', await columns.count())
    expect(await columns.count()).toBe(4)

    //await selectMultipleProducts(rows, page, 'Smartphone');
    //await selectMultipleProducts(rows, page, 'Tablet');
    //await selectMultipleProducts(rows, page, 'Wireless Earbuds');



    //2 ) select checbox for the product 4

    /*const matchedRow = rows.filter
        ({
            has: page.locator('td'),
            hasText: 'Smartwatch'
        })

        await matchedRow.locator('input').check()

        await page.waitForTimeout(5000)
        */

        // 4) print all product details from all the pages using loops

/*for(let i=0; i<await rows.count(); i++){

    const row = rows.nth(i);
    const tds = row.locator('td')

    for(let j=0; j< await tds.count()-1; j++){
        
        console.log(await tds.nth(j).textContent())

    }}*/

//5) read all the datas from all the pages

    const pages = await page.locator('.pagination li a')
    console.log("the number of pages are :", await pages.count())

    for(let p=0; p< await pages.count(); p++)
        {
            if(p>0)
                {
                    await pages.nth(p).click()
                }
                for(let i=0; i<await rows.count(); i++){

                    const row = rows.nth(i);
                    const tds = row.locator('td')
                
                    for(let j=0; j< await tds.count()-1; j++){
                        
                        console.log(await tds.nth(j).textContent())
                
                    }}
            await page.waitForTimeout(5000)

        }

})

// select multiple products using re-usable function

async function selectMultipleProducts(rows, page, name){

    const matchedRow = rows.filter
    ({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()

}
