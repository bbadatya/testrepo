import { expect, Locator, Page } from "@playwright/test";

export class loginPage2 {

  constructor(page) {

    this.page = page;
    //this.clickToLoginBtn=this.page.getByRole("button", { name: "Click to Log In" })
    this.clickToLoginBtn=this.page.locator("//button[.='Click to Log In']")
    this.emailField=this.page.locator("//input[@id='username' and @type='text']")
    this.continueBtn=this.page.getByRole("button", { name: "Continue" })
    this.passwordField=this.page.locator("#password")
    this.loginBtn=this.page.locator("#kc-login")
    this.loggedOutText = this.page.locator("//div[@role = 'alert']")

}

  async getClickToLoginBtn() {
    return await this.clickToLoginBtn;
  }

  async getLoggedOutText() {
    let pValue = await this.loggedOutText.textContent();
    return pValue;
  }

  async validLogin(userName,passWord) 
  
  {
    await this.page.waitForTimeout(2000)
    await this.clickToLoginBtn.click();
    await this.emailField.clear()
    await this.emailField.type(userName);
    await this.continueBtn.click();
    await this.passwordField.clear()
    await  this.passwordField.type(passWord);
    await this.loginBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
    
  }
}