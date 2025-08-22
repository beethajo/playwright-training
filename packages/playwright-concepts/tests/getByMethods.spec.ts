/*
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/


import {test,expect} from '@playwright/test';

test('login using the getByMethods',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const title = await page.getByAltText('company-branding');
    await expect(title).toBeVisible();

    await page.getByPlaceholder('Username').type('Admin');
    await page.getByPlaceholder('Password').type('admin123');
    await page.getByRole('button', { name: 'Login'} ).click();
})
