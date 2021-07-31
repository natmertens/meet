# Meet App

## Overview: 
The objective of this project was to build a serverless, progressive web application using React as well as a test-driven development technique. The app uses the Google Calendar API and AWS Lambda to fetch upcoming events and allows users to search for upcoming web development events in their city, specify the number of events they want to see, and get event details. In addition, they can view a chart displaying the number of upcoming events by city.

## Key Features:

### Feature 1
User Story: 
As a user
I should be able to “filter events by city”
so that I can see the list of events that take place in that city

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

### Feature 2 
User Story: 
As a user
I should be able to show and hide an event’s details
so that I can choose whether or not I want to see the listed details if an event.

Scenario 1: An event element is collapsed by default
Given that a list of events has been loaded
When the user selects a city
Then the user should see a list of events in that city with hidden details

Scenario 2: User can expand an event to see its details
Given the event element is collapsed
When the user clicks on a “Show Details” button
Then the event element will expand to show details of the event

Scenario 3: User can collapse an event to hide its details
Given the event element has not been collapsed
When the user clicks on a “Hide Details” button
Then the event element will collapse to hide the details

### Feature 3
User Story:
As a user
I should be able to specify the number of events displayed on the screen
so that I can determine how many events I want to see at a time


Scenario 1: When user hasn’t specified a number, twelve is the default number
Given that the user has not specified a number
When the user selects a city
Then a list of twelve events in that city will be displayed on the page

Scenario 2: User can change the number of events they want to see
Given that the user has selected a city
When the user inputs a number of events in an input field
Then a list with the specified number of events in that city will be displayed on the page

### Feature 4 
User Story:
As a user
I should be able to use the app when I’m offline
so that I do not depend on an available internet connection to see previously loaded events

Scenario 1: Show cached data when there’s no internet connection
Given that there is no internet connection
When the user opens the app
Then the user will be able to see the cached event data

Scenario 2: Show error when user changes the settings (city, time range)
Given that the app is displaying the cached data without an internet connection
When the user changes the setting for the city or the time range
Then an error will be displayed

### Feature 5 
User Story: 
As a user 
I should be able to see a chart with the number of upcoming events in each city 
so that I can see how many events there are to check out in each city

Scenario 1: Show a chart with the number of upcoming events in each city
Given that the user has not selected a city
When the user goes to the “data visualization” page
Then the user will be able to see a chart with the number of upcoming events in each city

## To Start:

Run "npm install" to install all dependencies.

## Build for Development:

- Run app via "npm run start".


