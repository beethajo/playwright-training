import {test,expect} from '@playwright/test';

test('handling the multiselect drop down',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //select options from the multi select drop down
    await page.selectOption('#colors',['Blue','Red','Yellow']);
    await page.waitForTimeout(3000);

    //assertions
    //check the count of the options available in the drop down
    const counts = await page.$$('#colors option');
    // console.log("Number of options : ",counts.length);
    await expect(counts).toHaveLength(7);
})
