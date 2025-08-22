Feature: Login functionality on SauceDemo website


  Scenario: Successful login with valid credentials
    Given I open the SauceDemo website
    When I enter "standard_user" and "secret_sauce"
    And I click the login button
    Then I should be redirected to the products page

  Scenario: Unsuccessful login with invalid credentials
    Given I open the SauceDemo website
    When I enter "invalid_user" and "wrong_password"
    And I click the login button
    Then I should see a login error message
