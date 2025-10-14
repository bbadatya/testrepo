const {test, expect} =  require('@playwright/test')

test('Hooks 1 --> Login', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('#login2').click()

    await page.fill('#loginusername', 'admin')
    await page.fill('#loginpassword', 'admin')
    await page.locator("//button[normalize-space()='Log in']").click()

    // HOME PAGE
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')

    expect(products).toHaveLength(9)

    //LOGOUT

    await page.locator('#logout2').click()

    await page.waitForTimeout(5000)


})

test.only('Hooks 1 --> Add to cart', async({page})=>{
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
    

    //LOGOUT

    await page.locator('#logout2').click()

    await page.waitForTimeout(5000)


})