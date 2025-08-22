import { test as base,createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCartPage';
import { RemoveItemPage } from '../pages/RemoveItemPage';


export const test = base.extend<{
    loginPage : LoginPage;
    addToCartPage : AddToCartPage;
    removeItemPage : RemoveItemPage;
}>({
    loginPage : async({page},use)=>{
        await use(new LoginPage(page));
    },
    addToCartPage : async ({page},use)=>{
        await use(new AddToCartPage(page));
    },
    removeItemPage : async ({page},use)=>{
        await use(new RemoveItemPage(page));
    }
});

export const { Given,When,Then,Before,After,BeforeAll,AfterAll} = createBdd(test);