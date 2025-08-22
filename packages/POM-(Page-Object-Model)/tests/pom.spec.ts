import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { AddItemCart} from '../pages/AddItemCart';
import { user } from '../src/User';

test.describe('SwagLabs Functional Flow', () => {

  test('TC1 - Login and verify Products page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login(user.user_id, user.password);

    await productsPage.verifyProductsPageLoaded();

    await loginPage.logout();
  });

  test('Login → Add to cart → Continue shopping', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(user.user_id, user.password);

  // Step 2: Verify products page is visible
  await productsPage.verifyProductsPageLoaded();

  // Step 3: Add multiple items
  await productsPage.addMultipleProducts([
    'add-to-cart-sauce-labs-backpack',
    'add-to-cart-sauce-labs-bolt-t-shirt'
  ]);

  // Step 4: Verify cart count = 2
  await productsPage.verifyCartCount(2);

  // Step 5: Go to cart → Continue shopping
  await productsPage.openCart();
  await productsPage.clickContinueShopping();

  // Step 6: Verify back to products page
  await productsPage.verifyProductsPageLoaded();
});

  test('TC3 - Verify all hamburger menu options are working', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(user.user_id, user.password);

  // Optionally add a product before reset
  await checkoutPage.addBackpack.click();

  await checkoutPage.clickAllAndVerify();

  // Optionally, check you're back at login page after logout
  await loginPage.verifyOnLoginPage();
  });
  test('TC7-Verify the user can remove the item from the cart',async({page})=>{
    const loginpage = new LoginPage(page);
    const addItemCart = new AddItemCart(page);
    await loginpage.goto();
    await loginpage.login(user.user_id,user.password);
    await addItemCart.addItemToCart();
    await addItemCart.goToCart();
    await addItemCart.removeItem();
    await addItemCart.verifyItemRemoved();
  })
});
