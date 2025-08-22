import { Locator,test,Page, expect } from "@playwright/test";

export class FormPage{
    readonly page : Page
    constructor(page:Page){
        this.page = page;
    }
    async goto(){
        test.setTimeout(70000);
        await this.page.goto('https://demoqa.com/',{timeout:60000,waitUntil: 'domcontentloaded'});
        await this.page.locator("//div[@class='home-body']//div[2]//div[1]//div[2]//*[name()='svg']").click();
        await this.page.locator("//body/div[@id='app']/div[@class='body-height']/div[@class='container playgound-body']/div[@class='row']/div[1]/div[1]/div[1]/div[2]/span[1]/div[1]").click();
        await this.page.getByText('Practice Form').click();
    }
    async verifyFormPage(){
        await expect(this.page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    }
    async fillDetails(){
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('vinay');
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Perisetti');
        await this.page.getByRole('textbox', { name: 'name@example.com' }).fill('abc@gmail.com');
        await this.page.getByText('Male', { exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill('9123456789');
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.getByRole('combobox').nth(1).selectOption('2001');
        await this.page.getByRole('option', { name: 'Choose Sunday, July 1st,' }).click();
        await this.page.locator('.subjects-auto-complete__value-container').click();
        await this.page.locator('#subjectsInput').fill('java');
        await this.page.getByText('Sports').click();
        await this.page.getByText('Music').click();
          // await page.getByRole('button', { name: 'Select picture' }).click();
          // await page.getByRole('button', { name: 'Select picture' }).setInputFiles('Screenshot 2025-07-10 132508.png');
        await this.page.getByRole('textbox', { name: 'Current Address' }).fill('hyderabad');
        await this.page.locator('.css-tlfecz-indicatorContainer').first().click();
        await this.page.getByText('NCR', { exact: true }).click();
        await this.page.getByText('Select City').click();
        await this.page.getByText('Noida', { exact: true }).click();
    }
    async submitButton(){
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
    async verifyFormSubmission(){
        await expect(this.page.getByRole('dialog', { name: 'Thanks for submitting the form' })).toBeVisible();
    }
    async verifyformSubmissionwithoutDetails(){
        await expect(this.page.getByRole('dialog', { name: 'Thanks for submitting the form' })).not.toBeVisible();
    }
}