const{test, expect} = require('@playwright/test')

test('Page ScreenShot', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})
})

test('Full Page ScreenShot', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png', fullpage:true})
})

test.only('Element Page ScreenShot', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('div:nth-child(8) div:nth-child(1) a:nth-child(1) img:nth-child(1)')
            .screenshot({path:'tests/screenshots/'+Date.now()+'SonyVaio.png'})
})