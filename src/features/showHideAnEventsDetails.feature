Feature: Show and hide an events details by default

Scenario: An event element is collapsed by default
Given user has not clicked on details button
When the user opens the app
Then the user should see the list of upcoming events without any details

Scenario: User can expand an event to see its details
Given the main page is open
When the user clicks on a details button for a certain event
Then the user should see details for that event

Scenario:  User can collapse an event to hide its details
Given an event element has been expanded
When the user clicks on a hide-details button
Then the user should see the event element without any details