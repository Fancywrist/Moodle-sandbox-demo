Feature: Moodle Sandbox Demo

  Testing FOUR Login scenarios
  Background:
    Given I am on the test page

  Scenario: admin login
    When I type in the "admin" for user
    And I type the password
    And I click the login button
    Then I should see the "Admin User" profile
  Scenario: manager  login
    When I type in the "manager" for user
    And I type the password
    And I click the login button
    Then I should see the "Max Manager" profile
  Scenario: teacher login
    When I type in the "teacher" for user
    And I type the password
    And I click the login button
    Then I should see the "Terri Teacher" profile
  Scenario: student login
    When I type in the "student" for user
    And I type the password
    And I click the login button
    Then I should see the "Sam Student" profile