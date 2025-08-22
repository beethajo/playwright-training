import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page : Page;
    readonly userName : Locator;
    readonly password : Locator;
    readonly loginbutton : Locator;
    readonly title : Locator;
    readonly error : Locator;
    constructor(page : Page){
        this.page = page;
        this.userName = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.loginbutton = this.page.locator('#login-button');
        this.title = this.page.locator('.title');
        this.error = this.page.locator("//h3[contains(text(),'Username and password')]");
    }
    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username:string, password:string){
        await this.userName.type(username);
        await this.password.type(password);
    }
    async loginButton(){
        await this.loginbutton.click();
    }
    async verifyLoginPage(){
        await expect(await this.title).toBeVisible();
    }
    async verifyErrorMsg(){
        await expect(this.error).toBeVisible()
    }
}