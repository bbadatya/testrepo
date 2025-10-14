exports.LoginPage_SDET = 

class LoginPage_SDET {
    
    constructor(page){
        this.page = page;
        this.loginLink = page.locator('#login2')
        this.userName = page.locator('#loginusername');
        this.password =  page.locator('#loginpassword')
        this.loginBtn = page.locator("//button[normalize-space()='Log in']")
    }

    async goToLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async validateLoginPage(userName, password){
        
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userName).fill(userName);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();

    }
}