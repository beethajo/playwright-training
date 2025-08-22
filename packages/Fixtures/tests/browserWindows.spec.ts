import { test, expect } from '../myFixtures/test-fixtures';

test('Verify that the user can navigate from the home page to the Browser Windows section',async({framesPage,browserWindowsPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await browserWindowsPage.goto();
  await browserWindowsPage.verifyBrowser();
})
test('Verify new tab opens and shows sample text',async({framesPage,browserWindowsPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await browserWindowsPage.goto();
  await browserWindowsPage.switchToTab();
})
test('Verify new window opens and shows correct content',async({framesPage,browserWindowsPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await browserWindowsPage.goto();
  await browserWindowsPage.switchToWindow();
})
test('Verify New Window Message content',async({framesPage,browserWindowsPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await browserWindowsPage.goto();
  await browserWindowsPage.switchToWindowMsg();
})

test('Verify all buttons are visible on Browser Windows page',async({framesPage,browserWindowsPage})=>{
  await framesPage.goto();
  await framesPage.alertFrameSec();
  await framesPage.framesSec();
  await browserWindowsPage.goto();
  await browserWindowsPage.verifyButtons();
})
