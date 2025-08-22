import { expect, Locator, Page } from "@playwright/test";

export class RemoveItemPage{
    readonly page : Page;
    readonly addToCartBtn : Locator;
    readonly cartBtn : Locator;
    readonly removeBtn : Locator;
    readonly itemName : Locator;
    readonly cartBadge : Locator;
    constructor(page:Page){
        this.page = page;
        this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBtn = page.locator('.shopping_cart_link');
        this.removeBtn = page.locator('#remove-sauce-labs-backpack');
        this.itemName = page.locator('.inventory_item_name');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }
    async addToCart(){
        await this.addToCartBtn.click();
    }
    async navToCart(){
        await this.cartBtn.click();
    }
    async removeFromCat(){
        await this.removeBtn.click()
    }
    async verifyCart(){
        await expect(await this.itemName).toBeHidden()
    }
    async verifyCartBadge(){
        await expect(await this.cartBadge).toBeHidden()
    }
}
