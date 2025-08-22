import { Locator,test,Page, expect } from "@playwright/test";

export class AlertPage{
    readonly page : Page
    readonly alertsSection :Locator
    readonly expandAlertSection :Locator
    readonly alertButton : Locator
    readonly alertTimerButton: Locator
    readonly confirmButton : Locator
    readonly confirmOkButton : Locator
    readonly promptButton : Locator

    constructor(page:Page){
        this.page = page;
        this.alertsSection = this.page.getByText('Alerts, Frame & Windows');
        this.expandAlertSection = this.page.locator("//div[@class='element-list collapse show']//li[@id='item-1']");
        this.alertButton = this.page.locator('#alertButton');
        this.alertTimerButton = this.page.locator('#timerAlertButton');
        this.confirmButton = this.page.locator('#confirmButton');
        this.confirmOkButton = this.page.locator('#confirmButton');
        this.promptButton = this.page.locator('#promtButton');
    }
    async goto(){
        test.setTimeout(70000);
        await this.page.goto('https://demoqa.com/',{timeout:60000,waitUntil: 'domcontentloaded'});
        await this.alertsSection.click();
        await this.expandAlertSection.click();
    }
    async handleAlert():Promise<void>{
        //alert handling
        this.page.on('dialog',async dialog =>{
           await expect(dialog.message()).toContain('You clicked a button');
           await dialog.accept();
        })
        await this.alertButton.click();
    }
    async handleTimerAlert():Promise<void>{
        //handling the timer alert
        this.page.on('dialog',async dialog =>{
           await expect(dialog.message()).toContain('This alert appeared after 5 seconds');
           await dialog.accept();
        })
        await this.alertTimerButton.click();
        await this.page.waitForTimeout(6000);
    }
    async confirmAlert(): Promise<void>{
        //handling the confirm alert
        this.page.on('dialog',async dialog =>{
           await expect(dialog.message()).toContain('Do you confirm action?');
           await dialog.dismiss();
        })
        await this.confirmButton.click();
        await expect(this.page.getByText('You selected Cancel')).toBeVisible();
    }
    async confirmAccept():Promise<void>{
        //handling the confirm alert
        this.page.on('dialog',async dialog =>{
            await expect(dialog.message()).toContain('Do you confirm action?');
            await dialog.accept();
        })
        await this.confirmOkButton.click();
        await expect(this.page.getByText('You selected Ok')).toBeVisible();        
    }
    async promptAlert():Promise<void>{
        //handling the prompt alert
        this.page.on('dialog',async dialog=>{
            await expect(dialog.message()).toContain('Please enter your name');
            await dialog.accept('Vinay');
        })
        await this.page.locator('#promtButton').click();
        await expect(this.page.getByText('You entered')).toBeVisible();
    }
}