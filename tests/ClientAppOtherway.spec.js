const {test, expect} = require('@playwright/test');
// hete test and expect are called as fixtures of playwright

    test.only('Login and Add to Cart in CLient App', async ({browser})=>
        {
            const context = await browser.newContext();
            const page = await context.newPage();
            const email = "bikrambadatyatechie@gmail.com"
            const signIn = page.locator("#login"); 
            const ProductName = "IPHONE 13 PRO";
            const prodTitles = page.locator(".card b");
            await page.goto("https://rahulshettyacademy.com/client");
            console.log(await page.title());
            await expect(page).toHaveTitle("Let's Shop");
            await page.getByPlaceholder("email@example.com").fill("bikrambadatyatechie@gmail.com");
            await page.getByPlaceholder("enter your passsword").fill("Apple@123");
            await page.getByRole("button",{name :"Login"}).click();
            await page.waitForLoadState('networkidle');
            await page.locator(".card-body b").first().waitFor();

            await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name : "Add To Cart"}).click();

             await page.locator("[routerlink*='cart']").click();
             await page.locator("div li").first().waitFor();
             await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    

             await page.getByRole("button",{name :"Checkout"}).click();

             await page.getByPlaceholder("Select Country").pressSequentially("Ind");
             const dropdown = page.locator(".ta-results");
             await dropdown.waitFor();
             
             await page.getByRole("button",{name :" India"}).nth(1).click();

            await page.getByText("PLACE ORDER").click();
            await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
            
        });