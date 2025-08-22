Feature: Add product to cart

  As a user
  I want to add products to my shopping cart
  So that I can purchase them later

  Background:
    Given I open the SauceDemo website
    And I log in with valid credentials "standard_user" and "secret_sauce"

  Scenario: Add a specfic product to the cart
    When I dd the product "Sauce Labs Backpack" to the cart
    Then the cart icon should show 1 item
    And I should see "Sauce Labs Backpack" in the cart page

  Scenario Outline: Add a all the products to the cart
    When I add the product "<productName>" to the cart
    Then the cart icon should show 1 item
    And I should see "<productName>" in the cart page
Examples:
      | productName                       |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |