const {test, expect} = require('@playwright/test');
// hete test and expect are called as fixtures of playwright


test('Browser Context Playwright test', async ({browser})=>
{
// java script is asyncronous , there is no guarntee that all lines of codes will be executed sequentially
     
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username"); 
    const passWord = page.locator("[type='password']"); 
    const signIn = page.locator("[name='signin']"); 
    const cardTitles = page.locator(".card-body a");

 //above two lines of commented will replace page with browser in async in the function
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    // two methods to enter text one is type and another is fill and in advanmced version of playwright, type is deprecated
    await userName.fill("rahulshettyacademy");
    await passWord.fill("learningg");
    await signIn.click();
    console.log(page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("") // this will wipes off teh content which is already exist in the input field
    await userName.fill("rahulshettyacademy");
    await passWord.fill("learning");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    await page.waitForLoadState('networkidle');
    const allPageTitles = await cardTitles.allTextContents();
    //TRICKY- 1 : if we write direct 35 lines after commenting 32, 33 lines then it will not retruns all the arrays products name
    console.log(allPageTitles);   

});

test('UI Controls', async ({page})=>
    {
        const userName = page.locator("#username"); 
        const passWord = page.locator("[type='password']"); 
        const documentLink = page.locator("[href*='documents-request']")
        const signIn = page.locator("[name='signin']"); 
        const cardTitles = page.locator(".card-body a");
    
     //above two lines of commented will replace page with browser in async in the function
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await userName.fill("rahulshettyacademy");
        await passWord.fill("learningg");
        await page.locator("span.radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        await expect(page.locator("span.radiotextsty").last()).toBeChecked();

        const dropdwon = await page.locator("select.form-control");
        dropdwon.selectOption("consult");
        await page.locator("#terms").click();
        expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        // line 62, why await is not required cause whenever any action is to be performed like click, toBechecked outside the bracket then that time keyword 'await' is required
        // when we are performing any action inside the bracket in line 61, then 'await' is not required at the beginning of the statement
        //await page.pause();
        await expect (documentLink).toHaveAttribute('class','blinkingText');
    
    });

test('Child window handling', async ({browser})=>
    {   
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator("#username");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']")
        

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            await documentLink.click(),
  
        ])
        const text = await newPage.locator('.red').textContent();
        const arraText = text.split("@");
        const domain = arraText[1].split(" ")[0];
        console.log(domain);

        const email = await page.locator("#username").fill(domain);
        //await page.pause();
        console.log(await page.locator("#username").textContent());
        
// record and playback features in playwright 

//command is - npx playwright codegen https:www.google.com



});

