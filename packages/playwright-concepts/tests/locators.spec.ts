import {test,expect} from '@playwright/test'
test('locators practise',async({page})=>{
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');//id
  await page.locator('[name="password"]').fill('secret_sauce');//name
  await page.locator('.submit-button.btn_action').click();//class 
  await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();//xpath
  await page.locator('button[id="remove-sauce-labs-backpack"]').click();//cssSelector
  await page.locator("//a[@class='shopping_cart_link']").click();//xpath
  await page.getByText('Twitter').click();//linktext
  await page.getByText('Twit',{exact:false}).click();//partial linktext
})
//------------------navigating to the different websites ------------------
// test('navigating to pep', async({page})=>{
//   let pep =await page.goto("https://pep.prolifics.com/");
//   if(pep!){
//     console.log("page not found");
//   }
// })

// test('navigating to the google',async({page})=>{
//   await page.goto("https://www.google.com");
// })

// test('navigating to the youtube',async({page})=>{
//   await page.goto("https://www.youtube.com");
// })

//------------------------- login functionality for the saucedemo-------------------------
// test('login functionality',async({page})=>{
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator("//input[@id='user-name']").fill('standard_user');
//   await page.locator("//input[@id='password']").fill('secret_sauce');
//   await page.locator("//input[@id='login-button']").click();
//   //to appear all the elements wait for the 3sec
//   await page.waitForTimeout(3000);

//   //select the product and add to the cart and then go to the cart and then go to the continue shopping
//   await page.locator("//div[normalize-space()='Sauce Labs Backpack']").click();
//   await page.locator("//button[@id='add-to-cart']").click();
//   await page.locator("//a[@class='shopping_cart_link']").click();
//   await page.locator("//button[@id='continue-shopping']").click();

//   //after that logout from that website
//   await page.locator("//button[@id='react-burger-menu-btn']").click();
//   await page.locator("//a[@id='logout_sidebar_link']").click();

// })

