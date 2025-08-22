import { Locator, Page, expect } from '@playwright/test';

export class AddItemCart{
    readonly addToCartBtn : Locator
    readonly goToCartIcon : Locator
    readonly removeItemBtn : Locator
    readonly verifyRemove : Locator
    constructor(private page:Page){
        this.addToCartBtn = this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.goToCartIcon = this.page.locator("//a[@class='shopping_cart_link']");
        this.removeItemBtn = this.page.getByRole('button',{name : 'Remove'});
        this.verifyRemove = this.page.locator("//span[@class='shopping_cart_badge']");
    }
    async addItemToCart(){
        await this.addToCartBtn.click();
    }
    async goToCart(){
        await this.goToCartIcon.click();
    }
    async removeItem(){
        await this.removeItemBtn.click();
    }
    async verifyItemRemoved(){
        await expect(this.verifyRemove).toBeHidden();
    }
}
