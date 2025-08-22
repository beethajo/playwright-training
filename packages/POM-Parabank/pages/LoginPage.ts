import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly userName: Locator;
  readonly passWord: Locator;
  readonly logInBtn: Locator;

  constructor(private page: Page) {
    this.userName = this.page.locator('input[name="username"]');
    this.passWord = this.page.locator('input[name="password"]');
    this.logInBtn = this.page.getByRole('button', { name: 'Log In' });
  }

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.userName.fill(username);
    await this.passWord.fill(password);
    await this.logInBtn.click();
  }

  async verifyLoginSuccess() {
    //await expect(this.page.locator('h1.title')).toHaveText('Accounts Overview', { timeout: 10000 });
    await this.page.waitForSelector('text=Accounts Overview');
  }
}
