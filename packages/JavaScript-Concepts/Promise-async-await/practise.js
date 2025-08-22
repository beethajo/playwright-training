/*
  A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation.

  States of a Promise:
                      Pending – Initial state
                      Fulfilled – The operation was successful
                      Rejected – The operation failed

                      OR
    A Promise represents a task that will complete in the future — either with success (resolved) 
    or failure (rejected).

    For example “Ordering food online — it’s not ready immediately. 
    You get a promise it will arrive soon. You can either wait for it (await), 
    or do something else while it comes (e.g., parallel tasks with Promise.all()).”
 */

//Basic example of Promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 1000);
});

myPromise.then((result) => console.log(result));

/**
 * 
 * Promise - async/await concept 

 * Why This Matters in Playwright
Playwright commands like page.goto(), page.click(), locator.fill() are asynchronous. That means they don’t finish 
instantly — the browser takes time to respond, navigate, render, etc.

If you don’t handle them properly using await or Promise patterns, your script will:

 - Fail unpredictably
 - Click on elements that don’t exist yet
 - Run in the wrong order
 - Skip necessary steps

This makes understanding Promises & async/await not optional — it's critical.
 */


//Using the async and await
/**
 * async/await:-
 * A cleaner way to wait for Promises without .then() chaining.
 */
async function fetchData() {
  const data = await myPromise;
  console.log(data); // "Data loaded"
}
fetchData();


/*
Promise.all() is used when multiple asynchronous operations need to run in parallel, 
and we want to wait until all of them finish

                   OR
  Playwright allows you to wait for multiple things at once.


  How the things happens 
┌────────────────────┐
│     page.goto()    │────▶ [Navigating...] ─────▶ [Page Loaded]
└────────────────────┘

When you `await`, you're telling JS:
“ Hold on! I need this to finish before moving forward.”

*/


//example of promise.all

await Promise.all([
  promise1,
  promise2
  //......
]);

await Promise.all([
  page.waitForNavigation(),      // Wait for navigation
  page.click('button#submit')    // Click triggers navigation
]);


//Using that async await in the playwright
test('Login and go to dashboard', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password');

  // Login button triggers page navigation
  await Promise.all([
    page.waitForNavigation(),
    page.click('#login-button')
  ]);

  await expect(page).toHaveURL('https://example.com/dashboard');
});


/*                    
| --------------- | ---------------------------------------------------- | ---------------------------------------- |
| `Promise`       | Handle async operations                              | `page.goto()` returns a Promise          |
| `async`         | Defines async function                               | `async function run() {}`                |
| `await`         | Waits for a Promise                                  | `await page.click()`                     |
| `Promise.all()` | Runs multiple Promises in parallel and waits for all | `await Promise.all([click, navigation])` |
---------------------------------------------------------------------------------------------------------------------
 */



/*
   User Action ➜ Trigger (e.g., page.click)
        ↘
    Promise (pending) ➜ async function waits using await
                                ↘
                         Fulfilled (Resolved) ➜ Continue script
 */

test('Login test', async ({ page }) => {
  await page.goto('https://app.com/login')
  await page.fill('#user', 'vinay')
  await page.fill('#pass', '123456')

  await Promise.all([
    page.waitForNavigation(),
    page.click('#loginBtn')
  ])
})

/**
 * Step 1:  await page.goto(...)
    ┌──────────────────────────────┐
    │ Navigating to login page... │
    └──────────────────────────────┘

Step 2: await page.fill(...)
    ┌────────────┐
    │ Typing...  │
    └────────────┘

Step 3: Promise.all([
             ┌─────────────────────────────┐
             │ Waiting for navigation      │
             └─────────────────────────────┘
             +
             ┌─────────────────────────────┐
             │ Clicking login button       │
             └─────────────────────────────┘
         ])

Step 4: Both done → Continue test

 */


//To get the better understand of how the promise.all works whenever your executing the spec file then it happens
/**
 * 
┌─────────────┐          ┌─────────────┐          ┌─────────────┐
│ Chromium    │ ───────▶│ Firefox     │ ───────▶ │ WebKit      │ 
└─────────────┘          └─────────────┘          └─────────────┘
       ↑                       ↑                        ↑
   Worker 1               Worker 2                 Worker 3
 (Runs independently)  (Runs independently)   (Runs independently)


 Each one is:
 - Executing the same test file
 - With its own browser context
 - And its own console.log output
 - Simultaneously (not waiting for others to finish)


 Under the Hood (using Promise.all() metaphor):
 
 Playwright internally does something like:

await Promise.all([
  runTestInChromium(),
  runTestInFirefox(),
  runTestInWebKit()
]);
Each test is a promise, and Promise.all() runs them concurrently, not sequentially.

That’s why you see:

[chromium]...
[firefox]...
[webkit]...
mixed together.

They are not printing in order of lines in your test but based on how fast each browser worker executes each step.
 */