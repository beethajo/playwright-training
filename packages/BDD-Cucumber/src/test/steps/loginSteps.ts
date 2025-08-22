import {Given,When,Then} from "@cucumber/cucumber"
import{ chromium,Page,Browser, expect} from "@playwright/test"

let browser : Browser
let page : Page


Given('I open the SauceDemo website', async function () {
    browser = await chromium.launch({headless:true});
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
});


When('I enter {string} and {string}', async function (username:string, password:string) {
    await page.locator('#user-name').type(username);
    await page.locator('#password').type(password);
});


When('I click the login button', async function () {
    await page.locator('#login-button').click();
});



Then('I should be redirected to the products page', async function () {
    await expect(await page.locator('.title')).toBeVisible();
    await browser.close();
});


Then('I should see a login error message',async function() {
    await expect(page.locator("//h3[contains(text(),'Username and password')]")).toBeVisible();
    await browser.close();
})

