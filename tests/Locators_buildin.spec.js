const {test, expect} = require('@playwright/test')

test('Locators Build-in', async ({page}) =>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //const logo = page.getByAltText('company-branding');
        //await expect(logo).toBeVisible();

        await expect(await page.getByAltText('company-branding')).toBeVisible();

        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', {type:'submit'}).click();

        const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

        await expect(await page.getByText(name)).toBeVisible()
        //await page.locator("//span[normalize-space()='My Info']").click()

        await page.getByRole('link', {name:'My Info'}).click()

        page.waitForLoadState();
        await expect(await page.locator("//label[normalize-space()='Employee Id']")).toBeVisible()
        //await expect(await page.locator("//label[normalize-space()='Employee Full Name']")).toBeVisible()

        //await page.getByRole('ul', {role:'menu'}).click();

        await page.close();







})