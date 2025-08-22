import { Locator, Page,expect } from '@playwright/test';

export class LoginPage {
    // const loc_username :  this.page.getByPlaceholder('Username');
    readonly usernameInput : Locator
    readonly passwordInput : Locator
    readonly loginButton : Locator 
    readonly page : Page
    readonly openMenu : Locator
    readonly logOut : Locator
  constructor( page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByTestId('login-button');
    this.page = page;
    this.openMenu = page.getByRole('button', { name: 'Open Menu' });
    this.logOut = page.getByRole('link', { name: 'Logout' });

  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async logout() {
    await this.openMenu.click();
    await this.logOut.click();
  }
  async verifyOnLoginPage() {
  await expect(this.usernameInput).toBeVisible();
}
}
