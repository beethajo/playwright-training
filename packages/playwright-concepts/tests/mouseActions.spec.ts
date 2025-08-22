import {test} from '@playwright/test';

test('Mouse hover',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const mousehover = await page.locator('.dropdown');
    
    await mousehover.hover();
    await page.locator("//a[normalize-space()='Mobiles']").click();
    await page.waitForTimeout(5000);
})
test('Double click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dbClick = await page.locator("button[ondblclick='myFunction1()']");

    await dbClick.dblclick();
    await page.waitForTimeout(4000);
})