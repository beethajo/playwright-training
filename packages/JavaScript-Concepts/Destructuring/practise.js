/**
 * Destructuring is a JavaScript/TypeScript feature that lets you unpack values from arrays or 
 * properties from objects into individual variables in a concise way.
 * 
 * Why It Matters in Playwright Automation
 - In Playwright, you're frequently interacting with rich objects like page, request, response, etc., that have many properties. 
 Destructuring lets you extract just what you need cleanly and clearly — which is critical in:
 - Cleaner assertions
 - Logging
 - Parameter passing
 - Better readability in your tests and framework


 */
//Example without destructuring :
const response = await page.goto('https://google.com');
const status = response.status();
const url = response.url();
console.log('Status:', status);
console.log('URL:', url);

//Example with destructuring 
const responses = await page.goto('https://example.com');
const { statuss, urls } = response;
console.log('Status:', status());
console.log('URL:', url());

/**
 * Common Destructuring Use Cases in Playwright
 * 
| Context                    | Destructuring Usage Example                                 |
| -------------------------- | ------------------------------------------------------------ |
| `request` event            | `const { method, url } = request;`                           |
| Page properties            | `const { title } = page;` (if extended/custom)               |
| API JSON responses         | `const { name, age } = await response.json();`               |
| Custom config or test data | `const { username, password } = credentials;`                |
| Selectors or locators      | `const { getByRole } = within(container);` (testing-library) |

 */

//Destructuring test and expect

import { test, expect } from '@playwright/test';

test('title check', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

//{ page } is object destructuring of the test context.
//page is one of the fixtures injected by Playwright's test runner.

//Destructuring Multiple Fixtures
test('multi fixture usage', async ({ page, browserName }) => {
  console.log('Running on:', browserName);
  await page.goto('https://example.com');
});
//This destructures both page and browserName from the test context.

//Destructuring from Returned Objects
//If you have a function that returns an object:
function getUser() {
  return {
    name: 'Chetan',
    age: 25,
    role: 'Tester'
  };
}

const { name, role } = getUser();
console.log(name, role); // Chetan Tester
