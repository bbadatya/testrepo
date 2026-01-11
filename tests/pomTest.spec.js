import {test, expect} from '@playwright/test'
const testData = JSON.parse(JSON.stringify(require("../testData/eCommTestData.json")));
import {LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

//////without POM //////


test('Login Page', async({page})=>{

    //Login

    const login = new LoginPage(page);
    await login.goToLoginPage();
    await login.login('bbadatya','Apple123')
    await page.waitForTimeout(3000);

    //Home
     const home = new HomePage(page);
     //await page.waitForLoadState();
     await home.addproductTocart(testData.productName);
     await page.waitForTimeout(3000);
     await home.gotoCart();

     //Cart

     const cart = new CartPage(page);
     await page.waitForTimeout(8000);
     const status = await cart.checkProductInCart(testData.productName)
     await expect(status).toBe(true);


})
