class LoginPage{

    constructor(page){
        this.page = page;
        this.signInbutton = page.locator("#login");
        this.username=page.locator("#userEmail");
        this.password=page.locator("#userPassword");

    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async validLogin(username, password)
    {
        await this.username.type(username);
        await this.passWord.type(password);
        await this.signInbutton.click();
    }
}

module.exports = {LoginPage}