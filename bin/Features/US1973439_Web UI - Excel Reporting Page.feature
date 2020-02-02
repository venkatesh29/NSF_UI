#Author: Hema
Feature: NSF - Excel Reporting Page
    
	@System @Regression @US1908715
	Scenario Outline: Validate the fields in the Excelreporting page
	
	Given User navigates to MAPS UI screen
  When User clicks on Reports link
  Then user is able to generate reports
  And Click on ExcelReports button
  Then Excel file will be downloaded with the selected record details 
  And verify that all the <Open_txtFileds> are displayed successfully in the excel file
  And verify the data in the excel file
 
  
  Examples:
  
  |            Open_txtFields                                                                       |
  |ContractNumber,PBPNumber,Segment,PlanEffectiveDate,GroupNumber,MasterGroupNumber,SiteName,GroupEffectiveDate,DataCategory,DatabaseTable,DatabaseColumn,RecordKeyID,RecordKeyValues|
  