import {test,expect} from '@playwright/test';

test('handling alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //by default, dialogs are auto dismissed by the playwright so, don't need handle them.
    //enabling alert handling //dialog window handler
    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator("//button[@id='alertBtn']");
})

test('confirmation dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button');
        await dialog.accept();
    })
    await page.locator("//button[@id='confirmBtn']").click();
})
test('prompt dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('vinay');
    })
    await page.click("//button[@id='promptBtn']");
})
