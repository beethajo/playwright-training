import {test,expect} from '@playwright/test';

test('handling the check box',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //single selection checkBox
    await page.locator('#sunday').check();
    await expect(await page.locator('#sunday')).toBeChecked();
    expect(await page.locator('#sunday').isChecked()).toBeTruthy();

    //multi selection checkBox
    const checkBoxList = ['#monday','#tuesday','#saturday'];
    for(const list of checkBoxList){
        await page.locator(list).check();
    }

    for(const unList of checkBoxList){
        if(await page.locator(unList).isChecked()){
            await page.locator(unList).uncheck();
        }
    }


    await page.waitForTimeout(5000);
})
