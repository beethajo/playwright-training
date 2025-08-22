import { After,Before } from "../../fixtures/my-fixtures";

Before(async({loginPage,removeItemPage})=>{
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    // await removeItemPage.addToCart();
});
Before({tags:'@productAdded'},async({loginPage,addToCartPage})=>{
//    await loginPage.login('standard_user', 'secret_sauce');
   await addToCartPage.addProductToCart("Sauce Labs Backpack");
   console.log('wheather it working or not ');
})
After(async({page})=>{
    await page.close();
});
