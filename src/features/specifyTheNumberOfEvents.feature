Feature: Specify the number of events

Scenario: When user has not specified a number, twelve is the default number
Given that the user has not specified a number
When the user opens the app
Then the default number of events is twelve

Scenario: User can change the number of events they want to see
Given the main page is open
When the user enters a number into the input field
Then a list with the specified number of events in that city will be displayed