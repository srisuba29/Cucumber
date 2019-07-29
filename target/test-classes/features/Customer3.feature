
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  

  @tag2
  Scenario Outline: Need to create a new customer
    Given user is in the homepage of site
    And user click on the add button
    When user will enter the details
    And user will click on the submit button
    Then user will validate whether customer id is generated

    Examples: 
      | fname  | lname | email          |addr     |mob       |
      | Raja   |    S  | raja@gmail.com |Pondy    |987653321 |
      | Rani   |    R  | rani@gmail.com |Cuddalore|9865324567|
      | Uma    |    T  | Uma@gmail.com  |trichy   |9876543109| 