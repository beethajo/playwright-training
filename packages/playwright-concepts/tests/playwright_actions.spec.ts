import {test,expect} from '@playwright/test'
//---------------------------playwright actions-----------------------
//---Verify user login and page navigation functions using Playwright operations like title fetch, URL verification, element visibility, and navigation actions (goBack, goForward, reload).-----

test('playwright actions',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator("//input[@id='user-name']").fill('standard_user');
  await page.locator("//input[@id='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();

  const pagetitle = await page.title();
  console.log("Current page title: ",pagetitle);

  const pageurl = await page.url();
  console.log("CUrrent page url: ",pageurl);

  const pageelements = await page.locator("//div[normalize-space()='Sauce Labs Backpack']").isVisible();
  console.log("Page elements are visible ",pageelements);

  await page.goBack();
  await page.goForward();
  await page.reload();

})
