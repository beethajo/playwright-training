import { test, expect } from '../myFixtures/test-fixtures.ts';

test('Navigate to the Practice Form page from homepage',async({formPage})=>{
  await formPage.goto();
  await formPage.verifyFormPage();
})

test('Submit Practice Form with All Valid Data',async({formPage})=>{
  await formPage.goto();
  await formPage.fillDetails();
  await formPage.submitButton();
  await formPage.verifyFormSubmission();
})

test('Submit Without Mandatory Fields',async({formPage})=>{
  await formPage.goto();
  await formPage.submitButton();
  await formPage.verifyformSubmissionwithoutDetails();
})