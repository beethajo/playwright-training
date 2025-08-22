import { Given,When,Then } from '@cucumber/cucumber';
import { chromium,Browser,Page, expect } from '@playwright/test';

let page : Page;
let browser : Browser

// Given('I open the SauceDemo website',async function () {
//     browser = await chromium.launch({headless:false});
//     page = await browser.newPage();
//     await page.goto('https://www.saucedemo.com/');
// })
When('I log in with valid credentials {string} and {string}',async function(username:string,password:string) {
    browser = await chromium.launch({headless:true});
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type(username);
    await page.locator('#password').type(password);
    await page.locator('#login-button').click();
})

When('I add the product {string} to the cart', async function (productName) {
  const productCard = await page.locator('.inventory_item').filter({ hasText: productName });
  await productCard.locator('button').click();
});
Then('the cart icon should show {int} item', async function (int) {
    const count = await page.locator('.shopping_cart_badge');
    await expect(count).toHaveCount(1);
});

Then('I should see {string} in the cart page', async function (productName) {
    await page.locator('.shopping_cart_link').click();
    const title = await page.locator('.inventory_item_name');
    await expect(title).toBeVisible();
    await browser.close();
});

When('I dd the product {string} to the cart', async function(string) {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
})





