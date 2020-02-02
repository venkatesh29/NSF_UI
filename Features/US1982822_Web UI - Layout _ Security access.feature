#Author: Hema
@System @Regression @US1982822
Feature: Web UI - Layout & Security access
Scenario Outline: verify the layout of Reports and Description 
	
	Given User navigates to MAPS UI screen
  #When User clicks on Home page link 
 # Then verfiy the Reports of the homepage with a <description> 
 
  
  Examples:
  
 |                                        Description                      |
 |Reports - The Reports module allows users to generate reports out of MAPS|

@system

Scenario Outline: security roles doesnot set up for the Non Prod Environments of the MAPSUI
Given User with no access to <secure_group> navigates to MAPS Web Application
When  User is on  Maps UI Home page 
Then  Reports link is disabled
  
   Examples:
|secure_groups                |         
| "MAPS_WEB_Reports_NonProd"  |

@system1
Scenario Outline: security roles having  set up for the Non Prod Environments of the MAPSUI
Given User with no access to <secure_group> navigates to MAPS Web Application
When User is on  Maps UI Home page
Then Reports link is unabled
And user able to generate reports

Examples:

|secure_groups                |         
| "MAPS_WEB_Reports_NonProd"  |



