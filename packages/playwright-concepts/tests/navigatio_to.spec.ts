import {test,expect} from '@playwright/test'
//testcase 1
test('navigating to pep', async({page})=>{
  let pep =await page.goto("https://pep.prolifics.com/");
  if(pep!){
    console.log("page not found");
  }
})
//testcase 2
test('navigating to the google',async({page})=>{
  await page.goto("https://www.google.com");
})
//testcase 3
test('navigating to the youtube',async({page})=>{
  await page.goto("https://www.youtube.com");
})
