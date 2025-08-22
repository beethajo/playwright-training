import { Locator, Page, expect } from '@playwright/test';
export class RegisterPage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly street: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phone: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly repassword: Locator;
  readonly registerLink: Locator;
  readonly registerBtn: Locator;

  constructor(private page: Page) {
    this.firstName = this.page.locator('[id="customer.firstName"]');
    this.lastName = this.page.locator('[id="customer.lastName"]');
    this.street = this.page.locator('[id="customer.address.street"]');
    this.city = this.page.locator('[id="customer.address.city"]'); 
    this.state = this.page.locator('[id="customer.address.state"]');
    this.zipCode = this.page.locator('[id="customer.address.zipCode"]');
    this.phone = this.page.locator('[id="customer.phoneNumber"]');
    this.ssn = this.page.locator('[id="customer.ssn"]');
    this.username = this.page.locator('[id="customer.username"]');
    this.password = this.page.locator('[id="customer.password"]');
    this.repassword = this.page.locator('#repeatedPassword');
    this.registerLink = this.page.getByRole('link', { name: 'Register' });
    this.registerBtn = this.page.getByRole('button', { name: 'Register' });
  }

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await this.registerLink.click();
  }

  async registerNewUser(user: any) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.street.fill(user.address);
    await this.city.fill(user.city);
    await this.state.fill(user.state);
    await this.zipCode.fill(user.zipCode);
    await this.phone.fill(user.phone);
    await this.ssn.fill(user.ssn);
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.repassword.fill(user.password);
    await this.registerBtn.click();
  }

  async verifyAccountCreated() {
    // await this.page.pause(); 
    // await expect(this.page.getByText('Your account was created successfully')).toBeVisible({ timeout: 10000 });
    await this.page.waitForSelector('text=Your account was created successfully');
  }
}
