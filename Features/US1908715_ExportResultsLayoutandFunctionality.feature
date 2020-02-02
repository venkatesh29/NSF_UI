#Author: Hema
Feature: NSF - Export Results Layout and functionality
    
  @System @Regression @US1908715
  Scenario Outline: Validate the fields in the layout of  Clinical ExportResults Screen
  Given User navigates to MAPS UI screen
  When User clicks on Clinical Setup link under Plan Menu
  And Clinical search screen is displayed
  And Click on Search Plan button and results are displayed
  And user should select atleast one record by clicking on checkbox
  And Click on ExportResults button
  Then Excel file will be downloaded with the selected record details 
  And verify that all the <Open_txtFileds> are displayed successfully in the excel file
  And verify the data in the excel file
  Examples:
  
  |            Open_txtFields                                                                       |
  | "Contract/PBP/Segment/plan Year;Plan Name,Status,Business Segment,Plan Type,Brand,SNP Type,QID,House Calls,Social and Government Referral Assistance" |
  
  @Smoke
  Scenario Outline: Validate the Information message on the Clinical ExportResults Screen
	Given User navigates to MAPS UI screen
  When User clicks on Clinical Setup link under Plan Menu
  And Clinical search screen is displayed
  And Click on Search Plan button and results are displayed
  And Click on ExportResults link of one of the results 
  Then Clinical ExportResults screen is displayed
  And verify that <Info_message> is displayed successfully
  
    Examples:
  
  |                       Info_message     |
  | "'You must select at least one record" |
			
