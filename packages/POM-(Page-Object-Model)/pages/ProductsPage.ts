import { Locator, Page, expect } from '@playwright/test';
import { LoadFnOutput } from 'module';

export class ProductsPage {
  // readonly addToCart : Locator
  readonly shoppingCart : Locator
  readonly continueShoping : Locator
  readonly cartBadge : Locator
  readonly products : Locator
  constructor(private page: Page) {
    // this.addToCart = this.page.locator(`[data-test="${testId}"]`);
    this.shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
    this.continueShoping = this.page.locator('[data-test="continue-shopping"]');
    this.cartBadge = this.page.locator('.shopping_cart_badge');
    this.products = this.page.getByText('Products');
  }

  // Add a product to cart by its test ID
  async addToCartByTestId(testId: string) {
    await this.page.locator(`[data-test="${testId}"]`).click();
  }

  // Click on cart icon
  async openCart() {
    await this.shoppingCart.click();
  }

  // Click "Continue Shopping" button from cart
  async clickContinueShopping() {
    await this.continueShoping.click();
  }

  // Get the number of items in cart
  async verifyCartCount(expected: number) {
    const badge = this.cartBadge;
    if (expected === 0) {
      await expect(badge).toHaveCount(0);
    } else {
      await expect(badge).toHaveText(expected.toString());
    }
  }

  // Add multiple products by their test IDs
  async addMultipleProducts(testIds: string[]) {
    for (const id of testIds) {
      await this.addToCartByTestId(id);
    }
  }

  // Verify products page loaded
  async verifyProductsPageLoaded() {
    await expect(this.products).toBeVisible();
  }
  
}
