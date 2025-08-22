/* Closure

A Closure is a function that remembers variables from the place it was created — even if that place is gone.

Imagine you're in a room where you pack your backpack (variables).
You leave the room (function ends), but your backpack still holds the stuff from that room.

*/
function outerRoom() {
  let snack = "a"
  return function innerBackpack() {
    console.log("I still have", snack)
  }
}

const person = outerRoom()
person() // "I still have a"

/**
 * Closure in Playwright
 */
 function createLogger(prefix) {
  return function log(message) {
    console.log(`[${prefix}] ${message}`)
  }
}

/*
createLogger("Login")
      │
      ▼
returns → function log()
           │ remembers prefix = "Login"

*/

/** Usage in playwright 
 */
 test('Login test', async ({ page }) => {
  const log = createLogger('Login') //  Remembers 'Login'

  await page.goto('https://app.com/login')
  log('Opened login page')          // [Login] Opened login page

  await page.fill('#username', 'vinay')
  log('Entered username')           // [Login] Entered username
})

/**
 * createLogger("Login") returns a function log()
 * That function remembers the prefix = "Login" even after createLogger ends
 * You can call log() anywhere — it still uses "Login" internally
 */


// Without Closure (Repetitive):
const prefix = 'Login'

console.log(`[${prefix}] Opened login`)
console.log(`[${prefix}] Entered username`)
console.log(`[${prefix}] Submitted`)
// You keep repeating the same prefix


//With Closures (Clean)
const log = createLogger('Login')

log('Opened login')        // [Login] Opened login
log('Entered username')    // [Login] Entered username
log('Submitted')           // [Login] Submitted

/**
 * createLogger("Dashboard") ──▶ returns log(message)
                                    │
                                    └─ remembers prefix = "Dashboard"
 */

/*
Example of swag labs 


[Login] Opening Login Page
[Login] Entering Username
[Cart] Adding Item to Cart
[Cart] Removing Item from Cart

*/
// Create loger function
function createLogger(pageName) {
  return function log(message) {
    console.log(`[${pageName}] ${message}`)
  }
}


// Use this in your test
test('Swag Labs - Login and Cart', async ({ page }) => {
  const loginLog = createLogger('LoginPage')
  const cartLog = createLogger('CartPage')

  await page.goto('https://www.saucedemo.com/')
  loginLog('Opened Login Page')

  await page.fill('#user-name', 'standard_user')
  loginLog('Entered Username')

  await page.fill('#password', 'secret_sauce')
  loginLog('Entered Password')

  await page.click('#login-button')
  loginLog('Clicked Login')

  await page.click('#add-to-cart-sauce-labs-backpack')
  cartLog('Added Backpack to Cart')

  await page.click('#remove-sauce-labs-backpack')
  cartLog('Removed Backpack from Cart')
})

/**
 * function createLogger("LoginPage")
   └── returns function log(msg)
             └── remembers: pageName = "LoginPage" ← CLOSURE
 */