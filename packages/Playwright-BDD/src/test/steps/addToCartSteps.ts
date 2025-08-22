// import { createBdd } from "playwright-bdd";
// import { expect } from "@playwright/test";
// import { LoginPage } from "../../pages/LoginPage";
// import { AddToCartPage } from "../../pages/AddToCartPage";
import { Given,When,Then } from "../../fixtures/my-fixtures";

// const {Given,When,Then} = createBdd();

When('I log in with valid credentials {string} and {string}',async ({loginPage},username:string,password:string)=> {
    // const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username,password);
    await loginPage.loginButton();
})

When('I add {string} to the cart', async ({addToCartPage},productName)=> {
  // const addToCartPage = new AddToCartPage(page);
  await addToCartPage.addProductToCart(productName);
});
Then('the cart icon should show {int} item', async({addToCartPage},int)=> {
    // const addToCartPage = new AddToCartPage(page);
    await addToCartPage.cartBadge(int);
});

Then('I should see {string} in the cart page', async ({addToCartPage},productName) =>{
    // const addToCartPage = new AddToCartPage(page);
    await addToCartPage.verifyProductInCart();
});

When('I dd the product {string} to the cart', async({addToCartPage},string) =>{
  // const addToCartPage = new AddToCartPage(page);
  await addToCartPage.specficProduct();
})
