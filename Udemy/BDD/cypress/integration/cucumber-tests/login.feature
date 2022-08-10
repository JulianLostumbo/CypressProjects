Feature: Login to App

    As a user I want to login into the App

    #@focus
    Scenario: Valid login
        Given I open login page
        And I want to wait 5000 milliseconds
        And I see "Zero - Log in" in the title
        And I see "/login" in the url
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage
    
    Scenario: Invalid login
        Given I open login page
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        And I click on submit login
        Then I should see an error message