import {test,expect} from '@playwright/test';

test('verify the web table rows and cloumns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const table = await page.locator('#productTable');
    await page.locator('//tbody/tr[1]/td[4]/input[1]').check();
    const columns = await table.locator('thead tr th');
    console.log("Number of columns",await columns.count());
    await expect(await columns.count()).toBe(4);
    const rows = await table.locator('tbody tr');
    console.log("Number of rows",await rows.count());
    await expect(await rows.count()).toBe(5);
})
test('Select the checkbox based on the product name ',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const table = await page.locator('#productTable');
    const col = await page.locator('thead tr th');
    const row = await page.locator('tbody tr');

    const matcherRow = row.filter({
        has:page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matcherRow.locator('input').check();
    await page.waitForTimeout(5000);
})

test('select the multiple products by using the reusable function',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const table = await page.locator('#productTable');
    const col = await page.locator('thead tr th');
    const row = await page.locator('tbody tr');

    await selectProducts(row,page,'Smartphone');
    await selectProducts(row,page,'Laptop');
    await selectProducts(row,page,'Tablet ');

    await page.waitForTimeout(3000);

})

test('verify the page is shifted to the next page if we click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    await page.locator("//a[normalize-space()='2']").click();
    await page.waitForTimeout(3000);
})

test('Read the all the data from the table in the first page',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const table = await page.locator('#productTable');
    const col = await page.locator('thead tr th');
    //from the table we used to read the data thats why i used as the table.locator here
    const row = await table.locator('tbody tr');

    for(let i=0;i < await row.count();i++){
        //using the nth function it stores the each element from the row
        const rows = row.nth(i);
        //it gives the all the td's which are inside the each row
        const tds = rows.locator('td');
        let rowText = '';
        for(let j=0;j < await tds.count()-1;j++){
            //prints the each element from the ta
            // console.log(await tds.nth(j).textContent());//	All text inside the element, including hidden,May include \n, spaces from DOM
            //console.log((await tds.nth(j).innerText()).trim());//Only visible (rendered) text,Cleans and formats as shown to users
            const text = await tds.nth(j).innerText();
            rowText += text.trim()+' ';
        }
        console.log(rowText.trim());
    }
    
})
test('Read the all the data from the all the pages',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const table = await page.locator('#productTable');
    const col = await page.locator('thead tr th');
    //from the table we used to read the data thats why i used as the table.locator here
    const row = await table.locator('tbody tr');
    const pages = await page.locator('.pagination li a');
    for(let p=0;p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }
    

        for(let i=0;i < await row.count();i++){
            //using the nth function it stores the each element from the row
            const rows = row.nth(i);
            //it gives the all the td's which are inside the each row
            const tds = rows.locator('td');
            let rowText = '';
            for(let j=0;j < await tds.count()-1;j++){
                //prints the each element from the ta
                // console.log(await tds.nth(j).textContent());//	All text inside the element, including hidden,May include \n, spaces from DOM
                //console.log((await tds.nth(j).innerText()).trim());//Only visible (rendered) text,Cleans and formats as shown to users
                const text = await tds.nth(j).innerText();
                rowText += text.trim()+' ';
            }
            console.log(rowText.trim());
        }
    }
})

async function selectProducts(row,page,name){
    const matcherRow = row.filter({
        has:page.locator('td'),
        hasText: name
    })
    await matcherRow.locator('input[type="checkbox"]').first().check();
}