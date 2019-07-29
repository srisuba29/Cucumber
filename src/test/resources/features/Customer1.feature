
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Tarriff test validation
    Given Go to telecom web page
    And Click the add tariff button
    When Enter the tariff fields
|2500|60|80|100|30|300|5|
    Then I validate tarriff
    

  

    