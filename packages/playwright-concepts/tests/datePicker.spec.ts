import { test,expect } from '@playwright/test';
import { Verify } from 'crypto';

test('Verify the date picker by entering the date',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill('#datepicker','09/23/2024');
    await page.waitForTimeout(3000);
})
test('Verify the date is picked form the calender',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const year = "2026";
    const month = "March";
    const date = "23"
    await page.click('#datepicker');

    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth==month){
            break;
        }
        await page.locator("//a[@title='Next']").click();
    }
    //date selection using the loop
    const dates = await page.$$('//a[@class="ui-state-default"]');
    // for(const dt of dates){
    //     if(await dt.textContent()==date){
    //         await dt.click();
    //         break;
    //     }
    // }

    await page.locator(`//a[@class="ui-state-default"][text()='${date}']`).click();
    await page.waitForTimeout(4000);
})
test('Verify the range of dates in between the calender',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.fill('#start-date','09-10-2025');
    // await page.fill('#end-date','10-05-2026');
    await page.click('.submit-btn');

    await page.waitForTimeout(5000);

})