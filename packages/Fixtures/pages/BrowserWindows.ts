import { Locator,test,Page, expect } from "@playwright/test";
export class BrowserWindowsPage{
    readonly page : Page
    constructor(page:Page){
        this.page = page;
    }
    

    async goto(){
        await this.page.locator("//span[normalize-space()='Browser Windows']").click();
    }
    async verifyBrowser(){
        await expect(this.page.locator("//h1[normalize-space()='Browser Windows']")).toBeVisible();
    }
    async switchToTab():Promise<void>{
        const [newtab] = await Promise.all([
         this.page.waitForEvent('popup'),
         this.page.locator('#tabButton').click(),
      ]);
      await expect(newtab.locator('h1')).toHaveText('This is a sample page');
    }
    async switchToWindow():Promise<void>{
        const [newwindow] = await Promise.all([
           this.page.waitForEvent('popup'),
           this.page.locator('#windowButton').click(),
        ]);
        await expect(newwindow.locator('h1')).toHaveText('This is a sample page');
    }
    async switchToWindowMsg():Promise<void>{
        const [newwindowmessage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.locator('#messageWindowButton').click(),
        ]);
        const contents = await newwindowmessage.content();
        await expect(contents).toContain('Knowledge increases by sharing');
    }
    async verifyButtons(){
        await expect(this.page.locator('#tabButton')).toBeVisible();
        await expect(this.page.locator('#windowButton')).toBeVisible();
        await expect(this.page.locator('#messageWindowButton')).toBeVisible();
    }
}

