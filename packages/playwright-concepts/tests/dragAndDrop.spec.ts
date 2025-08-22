import {test} from '@playwright/test';

test('Verify the drag and drop button',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const drag = await page.locator('#draggable');
    const drop = await page.locator('#droppable');

    //Approach 1
    await drag.hover();
    await page.mouse.down();

    await drop.hover();
    await page.mouse.up();
    await page.reload();
    //Approach 2
    await drag.dragTo(drop);


    await page.waitForTimeout(5000);
})