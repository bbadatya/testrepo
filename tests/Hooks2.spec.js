const {test, expect} =  require('@playwright/test')

let page;
test.beforeEach(async ({browser})=>{
page=await browser.newPage();

await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('#login2').click()

    await page.fill('#loginusername', 'admin')
    await page.fill('#loginpassword', 'admin')
    await page.locator("//button[normalize-space()='Log in']").click()

})

test.afterEach(async()=>{
    await page.locator('#logout2').click()

})
test('Hooks 2 --> Login', async()=>{
    
    // HOME PAGE
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')

    expect(products).toHaveLength(9)

    await page.waitForTimeout(5000)


})

test.only('Hooks 2 --> Add to cart', async()=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('#login2').click()

    await page.fill('#loginusername', 'admin')
    await page.fill('#loginpassword', 'admin')
    await page.locator("//button[normalize-space()='Log in']").click()

    // ADD TO CART
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')

    expect(products).toHaveLength(9)

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialoge', async dialog =>{

        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    await page.waitForTimeout(5000)


})