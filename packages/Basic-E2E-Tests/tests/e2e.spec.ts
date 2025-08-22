import { test, expect } from '@playwright/test';

test('TC_001 - Verify login with valid credentials', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page.getByText('Swag Labs')).toBeVisible();
});

test('TC_002 - Verify user can add a product to the cart', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.inventory_item_name')).toBeVisible();
});

test('TC_003 - Verify Burger Menu launches properly', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#react-burger-menu-btn').click();
  await expect(page.locator('#react-burger-menu-btn')).toBeVisible();
});

test('TC_004 - Verify all options under Burger Menu work', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#about_sidebar_link').click();

  await page.goBack();

  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#reset_sidebar_link').click();
  await expect(page.locator('.shopping_cart_badge')).toBeHidden();

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page.getByText('Swag Labs')).toBeVisible();
});

test('TC_005 - Verify closing the Burger Menu', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#react-burger-menu-btn').click();
  await expect(page.locator('#react-burger-menu-btn')).toBeVisible();
  await page.locator('#react-burger-cross-btn').click();
  await expect(page.locator('#react-burger-cross-btn')).toBeHidden();
});

test('TC_006 - Verify all details in cart', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await expect(page.getByText('Remove')).toBeVisible();

  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.inventory_item_name')).toBeVisible();
  await expect(page.locator('.inventory_item_desc')).toBeVisible();
  await expect(page.locator('.inventory_item_price')).toBeVisible();

  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  await expect(page.locator('.inventory_item_desc')).not.toHaveText('');
  await expect(page.locator('.inventory_item_price')).toHaveText('$29.99');
});
