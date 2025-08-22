/*
1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/
import {test,expect} from '@playwright/test';

test('assertitions practise',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    
    const searchItem = await page.locator("//input[@id='small-searchterms']");
    await expect(searchItem).toBeEnabled();
    
    await page.locator("//label[@for='gender-male']").click();
    const radioButton = await page.locator("//label[@for='gender-male']");
    await expect(radioButton).toBeChecked();

    const registeButton = await page.locator("//button[@id='register-button']");
    await expect(registeButton).toHaveAttribute("type","submit");

    await expect(await page.locator("//h1[normalize-space()='Register']")).toHaveText('Register');
    await expect(await page.locator("//h1[normalize-space()='Register']")).toContainText('Reg');

})
