import {test,expect} from '@playwright/test';

test.beforeEach('login',async({page})=>{
    await page.goto("https://www.saucedemo.com");
    await page.locator("//input[@id='user-name']").type('standard_user');
    await page.locator("//input[@id='password']").type('secret_sauce');
    await page.locator("//input[@id='login-button']").click();
})

test('locating multiple elements',async({page})=>{
    const items = await page.$$('.inventory_item_name ');

    for(const item of items){
        const prod = await item.textContent();
        console.log(prod);
    }
})
