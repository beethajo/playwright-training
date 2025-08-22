import { test, expect } from '../myFixtures/test-fixtures.ts';

test('Select “Yes” radio button and verify result',async({radioButtonPage})=>{
  await radioButtonPage.goto();
  await radioButtonPage.yes();
  await radioButtonPage.verifyYes();
})