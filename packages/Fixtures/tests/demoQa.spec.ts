import { test, expect } from '../myFixtures/test-fixtures.ts';

//textbox-----------------------------------------------------------------------------------------------------------
test('Verify Text Box form submission',async({textBoxPage})=>{
    await textBoxPage.goto();
    await textBoxPage.fillDetails();
    await textBoxPage.verifySubmission();
  })

//radio butttons---------------------------------------------------------------------------------------------------------  

test('Select “Yes” radio button and verify result',async({radioButtonPage})=>{
  await radioButtonPage.goto();
  await radioButtonPage.yes();
  await radioButtonPage.verifyYes();
})


//buttons----------------------------------------------------------------------------------------------------------
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

//form------------------------------------------------------------------------------------------------------------------

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

//alerts---------------------------------------------------------------------------------------------------------------------

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


//broswer windows----------------------------------------------------------------------------------------------------

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

//frames-------------------------------------------------------------------------------------------------------------
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