import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly openMenubtn : Locator
  readonly closeMenubtn : Locator
  readonly sideBar : Locator
  readonly aboutSideBar : Locator
  readonly resetSideBar : Locator
  readonly logOutSideBar : Locator
  readonly text : Locator
  readonly addBackpack : Locator
  constructor(private page: Page) {
    this.openMenubtn = this.page.getByRole('button', { name: 'Open Menu' });
    this.closeMenubtn = this.page.getByRole('button', { name: 'Close Menu' });
    this.sideBar = this.page.locator('[data-test="inventory-sidebar-link"]');
    this.aboutSideBar = this.page.locator('[data-test="about-sidebar-link"]');
    this.resetSideBar = this.page.locator('[data-test="reset-sidebar-link"]');
    this.logOutSideBar = this.page.locator('[data-test="logout-sidebar-link"]');
    this.text = this.page.locator('text=Build apps users love with AI-driven');
    this.addBackpack = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

  }

  async openMenu() {
    const menuBtn = this.openMenubtn;
    if (!(await menuBtn.isDisabled())) {
      await menuBtn.click();
    }
  }

  async closeMenu() {
    const closeBtn = this.closeMenubtn;
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
  }

  async clickAllItems() {
    await this.sideBar.click();
  }

  async clickAbout() {
    await this.aboutSideBar.click();
  }

  async clickResetAppState() {
    await this.resetSideBar.click();
  }

  async clickLogout() {
    await this.logOutSideBar.click();
  }

  async verifyAllMenuOptions() {
    await this.openMenu();
    await expect(this.sideBar).toBeVisible();
    await expect(this.aboutSideBar).toBeVisible();
    await expect(this.resetSideBar).toBeVisible();
    await expect(this.logOutSideBar).toBeVisible();
  }

  async clickAllAndVerify() {
    await this.openMenu();
    await this.clickAllItems();
    await this.closeMenu();

    await this.openMenu();
    await this.clickAbout();
    // await this.page.waitForURL('**saucelabs.com**'); // Wait for about redirect
    await expect(this.text).toBeVisible(); 


    await this.page.goBack(); // back to Swag Labs

    await this.openMenu();
    await this.clickResetAppState();
    await this.closeMenu();

    await this.openMenu();
    await this.clickLogout();
  }
  async addBackpackToCart() {
    await this.addBackpack.click();
  }
}
