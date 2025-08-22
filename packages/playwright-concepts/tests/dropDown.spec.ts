import {test,expect} from '@playwright/test';

test('handling drop downs',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //different ways to select the options from the dropdown
    await page.locator('#country').selectOption({label:'India'});//label
    await page.locator('#country').selectOption('India');//visible text
    await page.locator('#country').selectOption({value:'india'});
    await page.locator('#country').selectOption({index:4});
    await page.selectOption('#country','India');
    await page.selectOption('#country',{label:'India'});
    

    //checking the number of options in the dropdown
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // // const option = await page.$$('#country option');
    // console.log("Number of options: ",options.count());
    // await expect(options.count()).toBe(10);/
    const options = await page.locator('#country option');
    const count = await options.count();
    console.log("Number of options: ", count);
    expect(count).toBe(10);

    //check the presence of the content 
    const content=await page.locator('#country').textContent()
    await expect(content?.includes('India')).toBeTruthy();

    //check the presence of the value in the drop down using the loop

    const optionss = await page.$$('#country option');
    for(const options of optionss){
        console.log(await options.textContent());
    }
    let status = false;

    for(const options of optionss){
        let value = await options.textContent();
        if(value?.includes('France')){
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();


    //select option from dropdown using the loop

    const values=await page.$$('#country option')
    for(const option of values){
       let value=await option.textContent();
       if(value?.includes('France')){
           await page.selectOption("#country", value);
           break;
        }
    }



    await page.waitForTimeout(3000);
})
