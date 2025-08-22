import { test, expect } from '../myFixtures/test-fixtures';

test('Verify alert is triggered and accepted',async({alertPage})=>{
  await alertPage.goto();
  await alertPage.handleAlert();
})

test('Verify alert is triggered after some time and accepted',async({alertPage})=>{
  await alertPage.goto();
  await alertPage.handleTimerAlert();
})

test('Verify confirm alert and cancel it',async({alertPage})=>{
  await alertPage.goto();
  await alertPage.confirmAlert();
})

test('Verify confirm alert and ok it',async({alertPage})=>{
  await alertPage.goto();
  await alertPage.confirmAccept();
})

test('Verify prompt alert input and result message',async({alertPage})=>{
  await alertPage.goto();
  await alertPage.promptAlert();
})
