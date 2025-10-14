const {test, expect} = require('@playwright/test');
// hete test and expect are called as fixtures of playwright




test('Login to eShopping Website testcases - Assignment', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator("#userEmail"); 
        const passWord = page.locator("[type='password']"); 
        const signIn = page.locator("#login"); 
        const prodTitles = page.locator(".card b");
        await page.goto("https://rahulshettyacademy.com/client");
        console.log(await page.title());
        await expect(page).toHaveTitle("Let's Shop");
        // two methods to enter text one is type and another is fill and in advanmced version of playwright, type is deprecated
        await userName.fill("bikrambadatyatechie@gmail.com");
        await passWord.fill("Apple@123");
        await signIn.click();
        //await page.waitForLoadState('networkidle');
        //alternative of line no 22 if it's not working
        await prodTitles.first().waitFor();
        const allProdTitles = await prodTitles.allTextContents();
        console.log(allProdTitles);
        console.log(await prodTitles.first().textContent());
        console.log(await prodTitles.nth(1).textContent());
        
    });

    test.only('Login and Add to Cart in CLient App', async ({browser})=>
        {
            const context = await browser.newContext();
            const page = await context.newPage();
            const email = "bikrambadatyatechie@gmail.com"
            const userName = page.locator("#userEmail"); 
            const passWord = page.locator("[type='password']"); 
            const signIn = page.locator("#login"); 
            const ProductName = "IPHONE 13 PRO";
            const prodTitles = page.locator(".card b");
            await page.goto("https://rahulshettyacademy.com/client");
            console.log(await page.title());
            await expect(page).toHaveTitle("Let's Shop");
            // two methods to enter text one is type and another is fill and in advanmced version of playwright, type is deprecated
            await userName.fill("bikrambadatyatechie@gmail.com");
            await passWord.fill("Apple@123");
            await signIn.click();
            //await page.waitForLoadState('networkidle');
            //alternative of line no 22 if it's not working
            await prodTitles.first().waitFor();
            const allProdTitles = await prodTitles.allTextContents();
            console.log(allProdTitles);
            const products  = page.locator(".card-body");
            const counts = await products.count();

             for(let i =0; i<counts; ++i){

                if(await products.nth(i).locator("b").textContent()==ProductName){
                    await products.nth(i).locator("text= Add To Cart").click();
                    break;
                }
                //page.pause();

             }
             await page.locator("[routerlink*='cart']").click();
             await page.locator("div li").first().waitFor();
             const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
             expect(bool).toBeTruthy();

             await page.locator("[type='button']").last().click();
             await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
             const dropdown = page.locator(".ta-results");
             await dropdown.waitFor();
             dropdown.textContent();
             const optionCounts = await dropdown.locator("button").count();
             for(let i=0; i<optionCounts; ++i)
            {
                const texts = await dropdown.locator("button").nth(i).textContent();
                if(texts === " India"){
                    await dropdown.locator("button").nth(i).click();
                    break; 
                    
                }
                //page.pause();
             }


            await expect (page.locator("label[type='text']")).toHaveText(email);
            await page.locator("//input[@class='input txt']").last().fill("Bikram Badatya");
            await page.locator("//input[@class='input txt']").first().fill("123");

            await page.locator(".action__submit").click();
            await expect (page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
            const orderID = page.locator(".em-spacer-1 .ng-star-inserted").textContent();
            console.log(orderID);

            await page.locator("[routerlink*=myorders]").first().click();
            const rows = await page.locator("tbody tr");
            await page.locator("tbody").waitFor();

            for(let i=0; i<await rows.count(); ++i)
            {
                const rowOrderId= await rows.nth(i).locator("th").textContent();
                if (orderID.includes(rowOrderId))
                {
                    await rows.nth(i).locator("button").first().click();
                    break;
                }
            }
            const orderIdSummaryPage = page.locator(".col-text").textContent();
            await expect(orderID.includes(orderIdSummaryPage)).toBeTruthy();


            
            
        });