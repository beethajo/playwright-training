import { Locator,test,Page, expect } from "@playwright/test";
export class ButtonsPage{
    readonly page : Page;
    constructor(page:Page){
        this.page = page;
    }

    async goto(){
        test.setTimeout(70000);
        await this.page.goto('https://demoqa.com/',{timeout:60000,waitUntil: 'domcontentloaded'});
        await this.page.locator('path').first().click();
        await this.page.getByText('Buttons').click();
    }
    async doubleClick(){
        await this.page.getByRole('button', { name: 'Double Click Me' }).dblclick();
    }
    async verifyButton(){
        await expect(this.page.getByText('You have done a double click')).toBeVisible();
    }
    async rightClick(){
        await this.page.getByRole('button', { name: 'Right Click Me' }).click({button: 'right'});
    }
    async verifyRightClick(){
        await expect(this.page.getByText('You have done a right click')).toBeVisible();
    }
    async dynamicClick(){
        await this.page.getByRole('button', { name: 'Click Me', exact: true }).click();
    }
    async verifyDynamicClick(){
        await expect(this.page.getByText('You have done a dynamic click')).toBeVisible();
    }
}