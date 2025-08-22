/*
1) expect.soft(page).toHaveURL()   Page has URL
2) expect.soft(page).toHaveTitle()   Page has title
3) expect.soft(locator).toBeVisible()  Element is visible
4) expect.soft(locator).toBeEnabled()  Control is enabled
5) expect.soft(locator).toBeChecked()  Radio/Checkbox is checked
6) expect.soft(locator).toHaveAttribute() Element has attribute
7) expect.soft(locator).toHaveText()  Element matches text
8) expect.soft(locator).toContainText()  Element contains text
9) expect.soft(locator).toHaveValue(value) Input has a value
10) expect.soft(locator).toHaveCount()  List of elements has given length
*/
import {test,expect} from '@playwright/test';

test('assertitions practise',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');
    
    const searchItem = await page.locator("//input[@id='small-searchterms']");
    await expect.soft(searchItem).toBeEnabled();
    
    await page.locator("//label[@for='gender-male']").click();
    const radioButton = await page.locator("//label[@for='gender-male']");
    await expect.soft(radioButton).toBeChecked();

    const registeButton = await page.locator("//button[@id='register-button']");
    await expect.soft(registeButton).toHaveAttribute("type","submit");

    await expect.soft(await page.locator("//h1[normalize-space()='Register']")).toHaveText('Register');
    await expect.soft(await page.locator("//h1[normalize-space()='Register']")).toContainText('Reg');

})
