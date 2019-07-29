@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Tariff details
    Given Go to telecom homepage
    And used to click add terriff button
    When need to fill all details
      | monRen | freeLoc | freeInt | freesms | lpmc | ipmc | spc |
      |    600 |       5 |      89 |      10 |  100 |   10 |   8 |
      |    800 |       7 |      76 |      67 |   50 |    5 |  10 |
      |    700 |      30 |      65 |      87 |   40 |    8 |  60 |
    Then I validate the outcomes entered successfully
    And go back to homepage

  Scenario Outline: Entered all Tariff details
    Given Go to telecom homepage
    When Add all the tarriff details in fields"<monRen>","<freeLoc>","<freeInt>","<freesms>","<lpmc>","<ipmc>","<spc>"
    Then Validate whether the tarriff details entered successfully
    And go back to home page

    Examples: 
      | monRen | freeLoc | freeInt | freesms | lpmc | ipmc | spc |
      |   5000 |       7 |      67 |     100 | 1000 |    1 |   8 |
      |   7000 |      10 |     100 |     607 |  500 |   15 |  10 |
      |   8700 |     370 |     150 |     870 |  410 |   80 |  60 |
