import { expect, Locator, Page } from "@playwright/test";

export class AddToCartPage{
    readonly page : Page;
    readonly inventoryItem : Locator;
    readonly badge : Locator;
    readonly cartLink : Locator;
    readonly itemName : Locator;
    readonly specficItem : Locator;
    constructor(page:Page){
        this.page  = page;
        this.inventoryItem = page.locator('.inventory_item');
        this.badge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        this.itemName = page.locator('.inventory_item_name');
        this.specficItem = page.locator('#add-to-cart-sauce-labs-backpack');
    }
    async addProductToCart(productName){
        const productCard = await this.inventoryItem.filter({ hasText: productName });
        await productCard.locator('button').click();
    }
    async cartBadge(int){
        const count = await this.badge;
        await expect(count).toHaveCount(1);
    }
    async verifyProductInCart(){
        await this.cartLink.click();
        const title = await this.itemName;
        await expect(title).toBeVisible();
    }
    async specficProduct(){
        await this.specficItem.click();
    }
}