import { Locator, Page, expect ,test } from '@playwright/test';

export class FramesPage{
    readonly page : Page;
    constructor(page:Page){
        this.page = page;
    }
    async goto(){
        test.setTimeout(70000);
        await this.page.goto('https://demoqa.com/',{timeout:60000,waitUntil: 'domcontentloaded'});
    }
    async alertFrameSec(){
        await this.page.getByText('Alerts, Frame & Windows').click();
    }
    async framesSec(){
        await this.page.locator("//span[normalize-space()='Frames']").click();
    }
    async verifyframesVisibility(){
        await expect(this.page.locator("//h1[normalize-space()='Frames']")).toBeVisible();
    }
    async readContentFrame1(){
        const frame = this.page.frameLocator('#frame1');
        await expect(frame.locator('h1')).toContainText('This is a sample page');
    }
    async readContentFrame2(){
        const frame = this.page.frameLocator('#frame2');
        await expect(frame.locator('h1')).toContainText('This is a sample page');
    }
    async verfiyBothContents(){
        const frame1 = this.page.frameLocator('#frame1');
        const frame2 = this.page.frameLocator('#frame2');

        const text1 = await frame1.locator('h1').textContent();
        const text2 = await frame2.locator('h1').textContent();

        await expect(text1).toEqual(text2);
        console.log('those two headings are same in the different frames');
    }

}