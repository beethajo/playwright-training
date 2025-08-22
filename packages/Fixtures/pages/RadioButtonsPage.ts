import { Locator,test,Page, expect } from "@playwright/test";

export class RadioButtonPage{
    readonly page : Page;
    constructor(page:Page){
        this.page = page;
    }
    async goto(){
        test.setTimeout(70000);
        await this.page.goto('https://demoqa.com/',{ timeout: 60000 ,waitUntil: 'domcontentloaded'});
        await this.page.locator('path').first().click();
        await this.page.getByText('Radio Button').click();
    }    
    async yes(){
        await this.page.getByText('Yes').click();
    }
    async verifyYes(){
        expect(await this.page.getByText('You have selected Yes').isVisible());
    }
}