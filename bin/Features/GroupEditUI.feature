#Author: Hema
@System @Regression @US1941562
Feature:layout of GroupEditUiScreen and description
	Scenario Outline: verify the layout of GroupEditUiScreen and Description 
	
 
 Given User navigates to MAPS UI screen
 # When User clicks on Home page link 
  #Then verfiy the Group section of the homepage with a <description> of the Group Edit UI
 
  
  Examples:
  
 |                                        Description                                                     |
 |Group Edit UI - The Group Edit module allows users to edit fields for groups or logically delete groups |

@System
 Scenario Outline: verify the layout of GroupEditUiScreen 
 	Given User navigates to MAPS UI screen
  When  User clicks on Group Edit link under Group Menu
  And  Group Edit Screen is successfuly displayed under Group Menu 