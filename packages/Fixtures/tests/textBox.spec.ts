import { test, expect } from '../myFixtures/test-fixtures.ts';

test('Verify Text Box form submission',async({textBoxPage})=>{
    await textBoxPage.goto();
    await textBoxPage.fillDetails();
    await textBoxPage.verifySubmission();
  })