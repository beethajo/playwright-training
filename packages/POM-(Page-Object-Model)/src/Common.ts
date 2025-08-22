import { Page } from '@playwright/test';
import { user } from './User';

export let logout: (page: Page) => Promise<void>
export let login: (page: Page) => Promise<void>

login = async (page: Page): Promise<void> => {
    await page.goto('https://www.saucedemo.com');
    //await page.locator('#user-name').fill(user.iser_id)
    await page.getByPlaceholder('Username').fill(user.user_id)
    //await page.locator('#password').fill(user.password)
    await page.getByPlaceholder('Password').fill(user.password)
    //await page.locator('#login-button').click();
    await page.getByTestId('login-button').click();
}


logout = async (page: Page) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    //await page.locator("//a[@id='logout_sidebar_link']").click();
}

