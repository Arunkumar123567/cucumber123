
#Feature: login test
 # login
#@sanity
 # Scenario Outline: succesful login 
  #  When I enter the credentials
  #| username | password |
  #| test     | 123      |
  #| sam      | 7645     | 
  
  
  
Feature: login 
  Scenario: Success
  Given user in home page
  | username | password |
  | test     | 565654  |
  | sam      | 75654   | 
  And CLick on login button
  Then Home page is displayed
     
    
 