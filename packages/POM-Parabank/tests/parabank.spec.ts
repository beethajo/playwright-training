import { test } from '@playwright/test';
import { RegisterPage } from '../../POM-Parabank/pages/RegisterPage';
import { LoginPage } from '../../POM-Parabank/pages/LoginPage';
import { ForgotPasswordPage } from '../../POM-Parabank/pages/ForgotPassword';
import { faker } from '@faker-js/faker'; 

const user = {
  firstName: 'John',
  lastName: 'Doee',
  address: '123 Elm Street',
  city: 'Metropolis',
  state: 'NY',
  zipCode: '10001123',
  phone: '1234567890123',
  ssn: '123-45-6789123',
  username: faker.phone.number({style:"human"}), 
  password: 'securePass123', 
};

test.describe('ParaBank Test Suite', () => {
  
  test('Test Case 1: Register a New User', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.registerNewUser(user);
    await registerPage.verifyAccountCreated();
  });
  

  test('Test Case 2: Login with Registered User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.username, user.password);
    await loginPage.verifyLoginSuccess();
  });

  test('Test Case 3: Forgot Password / Customer Lookup', async ({ page }) => {
    const forgotPage = new ForgotPasswordPage(page);
    await forgotPage.goto();
    await forgotPage.lookupUser(user);
    await forgotPage.verifyLookupSuccess();
  });
});
