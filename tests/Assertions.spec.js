const {test, expect} = require('@playwright/test');

test('Assertions Test', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // 1) await expect(page).toHaveURL()	Page has a URL

    expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2) await expect(page).toHaveTitle()	Page has a title

    expect(page).toHaveTitle('nopCommerce demo store. Register')
    expect(page).not.toHaveTitle('Welcome to Playwright')

    //3) await expect(locator).toHaveText()	Element matches text

    const RegisterText = await page.locator('.page-title h1')
    await expect(RegisterText).toHaveText('Register')
    await expect(RegisterText).not.toHaveText('RegisterMMM')

    //4 await expect(locator).toContainText()	Element contains text

    const Register = await page.locator('.page-title h1')
    await expect(Register).toContainText('Reg')

    //4) await expect(locator).toHaveValue()	Input has a value

    const email = await page.locator("//input[@id='Email']")
    await email.fill('test@gmail.com')

    await expect(email).toHaveValue('test@gmail.com')
    await expect(email).not.toHaveValue('testXx@yahoo.com')

    //5) await expect(locator).toBeEnabled()	Element is enabled

    const searchTextBox = await page.locator('input#small-searchterms')
    await expect(searchTextBox).toBeEnabled();

    //6) await expect(locator).toBeVisible()	Element is visible

    const imglogo = await page.getByAltText('nopCommerce demo store')
    await expect(imglogo).toBeVisible();

    //7) await expect(locator).toBeChecked()	Checkbox/radio button is checked

    const maleradioBtn = await page.locator('#gender-male')
    await maleradioBtn.click()
    await expect(maleradioBtn).toBeChecked();

    const checkBox = await page.locator('#Newsletter')
    await expect(checkBox).toBeChecked();

    //8) await expect(locator).toHaveCount()	List has exact number of children

    const options = await page.locator('#customerCurrency option');
    await expect(options).toHaveCount(2)

    //9) await expect(locator).toHaveAttribute()	Element has a DOM attribute

    const btn = await page.locator('#register-button')
    await expect(btn).toHaveAttribute('type', 'submit')

    //10) negative scenarios 






})
