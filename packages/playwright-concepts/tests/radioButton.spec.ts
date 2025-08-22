import { test,expect } from "@playwright/test";

test('radio buttons',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    await page.locator('#gender-male').check();

    await expect(await page.locator('#gender-male')).toBeChecked();
    await expect(await page.locator('#gender-female')).not.toBeChecked();
})
