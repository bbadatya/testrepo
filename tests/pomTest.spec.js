import {test, expect} from '@playwright/test'
import {LoginPage_SDET} from '../pageobjects/LoginPage_SDET';

test('Login Page', async({page})=>{

    const login = new LoginPage_SDET(page);
    await login.goToLoginPage();
    await login.validateLoginPage('admin','admin123')
    await page.waitForTimeout(3000);

})
