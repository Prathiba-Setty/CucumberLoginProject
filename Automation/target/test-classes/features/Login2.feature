Feature: Application Login

Scenario Outline:Successful login with valid credintials
Given  User is on Home Page
When User enters username <username> and password <password>
And Clicks Go button
Then He can visit practice page
And A message is displayed.

Examples:
   |username|password|
   |"test@email.com"|"abcabc"|
   |"test1@email.com"|"abcabc"|