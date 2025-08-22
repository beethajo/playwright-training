import { test, expect } from '../myFixtures/test-fixtures.ts';

test('Verify that the user can navigate to the “Frames” section from the DemoQA home page',async({framesPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await framesPage.verifyframesVisibility();
})
test('Verify content inside frame1',async({framesPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await framesPage.readContentFrame1();
})


test('Verify content inside frame2',async({framesPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await framesPage.readContentFrame2();
})

test('Verify that the heading text inside both frame1 and frame2 is identical',async({framesPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await framesPage.verfiyBothContents();
})