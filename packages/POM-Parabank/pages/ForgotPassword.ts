import { Locator, Page, expect } from '@playwright/test';

export class ForgotPasswordPage {
  fillAccountInfo(arg0: { firstName: string; lastName: string; address: string; city: string; state: string; zipCode: string; ssn: string; }) {
    throw new Error('Method not implemented.');
  }
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly street: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly ssn: Locator;
  readonly forgotLink: Locator;
  readonly findBtn: Locator;

  constructor(private page: Page) {
    this.firstName = this.page.locator('#firstName');
    this.lastName = this.page.locator('#lastName');
    this.street = this.page.locator('[id="address.street"]');
    this.city = this.page.locator('[id="address.city"]');
    this.state = this.page.locator('[id="address.state"]');
    this.zipCode = this.page.locator('[id="address.zipCode"]');
    this.ssn = this.page.locator('#ssn');
    this.forgotLink = this.page.getByRole('link', { name: 'Forgot login info?' });
    this.findBtn = this.page.getByRole('button', { name: 'Find My Login Info' });
  }

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await this.forgotLink.click();
  }

  async lookupUser(details: any) {
    console.log('Filling lookup form...');
    await this.firstName.fill(details.firstName);
    await this.lastName.fill(details.lastName);
    await this.street.fill(details.address);
    await this.city.fill(details.city);
    await this.state.fill(details.state);
    await this.zipCode.fill(details.zipCode);
    await this.ssn.fill(details.ssn);
    await this.findBtn.click();
  }

  async verifyLookupSuccess() {
    // await this.page.pause(); 
    await expect(this.page.getByText('Your login information was located successfully')).toBeVisible({ timeout: 10000 });
  }
}
