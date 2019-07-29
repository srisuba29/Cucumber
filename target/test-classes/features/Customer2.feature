
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: 
    Given user in telecom page
    And used to click add terriff button
    When need to fill all details"<monRen>","<freeLoc>","<freeInt>","<freesms>","<lpmc>","<ipmc>","<spc>"
    And click submit button
    And yet another action
    Then user should see the successfully compilation page

 Examples:  
      | monRen|freeLoc| freeInt | freesms| lpmc |ipmc  |spc |
      | 600   |     5 | 89      |10      | 100  | 10   | 8  |
      | 800   |     7 | 76      |67      |  50  |  5   |10  | 
      | 700   |    30 | 65      |87      |  40  |  8   |60  | 