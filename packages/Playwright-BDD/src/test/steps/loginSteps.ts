// import { createBdd } from 'playwright-bdd';
// import{ expect } from '@playwright/test';
// import { LoginPage } from '../../pages/LoginPage';
// import { log } from 'console';
// const { Given, When, Then } = createBdd();
import { Given,When,Then } from "../../fixtures/my-fixtures";

Given('I open the SauceDemo website', async  ({loginPage}) => {
    // const loginPage = new LoginPage(page);
    await loginPage.goto();
});

When('I enter {string} and {string}', async ({loginPage},username:string, password:string)=> {
    // const loginPage = new LoginPage(page);
    await loginPage.login(username,password);
});


When('I click the login button', async ({loginPage})=> {
    // const loginPage = new LoginPage(page);
    await loginPage.loginButton();
});


Then('I should be redirected to the products page', async ({loginPage}) =>{
    // const loginPage = new LoginPage(page);
    await loginPage.verifyLoginPage();
});


Then('I should see a login error message',async ({loginPage}) =>{
    // const loginPage = new LoginPage(page);
    await loginPage.verifyErrorMsg();
})


