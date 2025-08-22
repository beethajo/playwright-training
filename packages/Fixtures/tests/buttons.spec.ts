import { test, expect } from '../myFixtures/test-fixtures.ts';

test('Validate Double Click Button Functionality',async({buttonsPage})=>{
  await buttonsPage.goto();
  await buttonsPage.doubleClick();
  await buttonsPage.verifyButton();
})
test('Validate Right Click Button Functionality',async({buttonsPage})=>{
  await buttonsPage.goto();
  await buttonsPage.rightClick();
  await buttonsPage.verifyRightClick();
})
test('Validate Button Click with Dynamic Text',async({buttonsPage})=>{
  await buttonsPage.goto();
  await buttonsPage.dynamicClick();
  await buttonsPage.verifyDynamicClick();
})