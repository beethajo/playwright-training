import { Locator,test,Page, expect } from "@playwright/test";

export class TextBoxPage{
    readonly page : Page;
    constructor(page:Page){
        this.page = page;
    }
    async goto(){
        test.setTimeout(70000);
        await this.page.goto('https://demoqa.com/',{ timeout: 60000 ,waitUntil: 'domcontentloaded'});
        await this.page.locator("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
        await this.page.locator("//span[normalize-space()='Text Box']").click();
    }
    async fillDetails(){
        await this.page.getByPlaceholder('Full Name').fill('Vinay');
        await this.page.getByPlaceholder('name@example.com').fill('abc@gmail.com');
        await this.page.getByPlaceholder('Current Address').fill('Hyderabad');
        await this.page.locator("//textarea[@id='permanentAddress']").fill('Andhra Pradesh');
        await this.page.getByRole('button',{name:'Submit'}).click();
    }
    async verifySubmission(){
        await expect(this.page.locator('#name')).toHaveText('Name:Vinay');
    }
}