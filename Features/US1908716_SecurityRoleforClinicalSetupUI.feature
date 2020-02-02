#Author:Hema
@System @Regression @US1908716
Feature: Security Roles for Clinical Setup UI

Scenario Outline: security roles doesnot set up for the Non Prod Environments of the Clinical Setup UI
Given User with no access to <secure_groups> navigates to MAPS Web Application
When  User clicks on Clinical link under Plan Menu 
Then Clinical Setup link will be disabled

Examples:

|secure_groups                      |         
| "MAPS_WEB_Clinical_Edit_NonProd"  |
| "MAPS_WEB_Clinical_View_NonProd"  |