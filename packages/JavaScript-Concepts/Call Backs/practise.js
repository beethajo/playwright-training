/**
 * CallBacks:-
 * 
 * A callback is a function passed as an argument to another function, 
 * to be called later — usually in response to an event.
 * 
 * Example :-
 * Think of installing a doorbell callback function:
   You define a function: alertMe()
   You pass it to the bell system: bell.onRing(alertMe)
   Later, when someone presses the bell, the system calls your function.
 */

    //In Playwright: Callbacks = Event Responders

/*Playwright APIs like page.on(...) allow you to listen to browser events (like console, request, response, dialog).*/

page.on('console', (msg) => {
  console.log('📝 Browser says:', msg.text())
})
/*page.on('event', callbackFn)

When 'event' occurs → Playwright calls callbackFn automatically
 */

//Use Case in Playwright

test('Console logs are captured', async ({ page }) => {
  page.on('console', msg => {
    console.log(`[Browser Log]: ${msg.text()}`)
  })

  await page.goto('https://example.com')
  await page.evaluate(() => console.log('Hello from browser!'))//Browser Log : Hello from browser!
})
