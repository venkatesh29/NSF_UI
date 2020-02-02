#Author: Hema
Feature: NSF - Clinical Mass Edit Screen Functionality
    
	@System @Regression @US1908713
	Scenario Outline: Validate the fields in the layout of ClinicalMass Edit Screen
	
	Given User navigates to MAPS UI screen
  When User clicks on Clinical Setup link under Plan Menu
  And Clinical search screen is displayed
  And Click on Search Plan button and results are displayed
  And Select atleast one plan by clicking on checkbox 
  And click on MassUpdate button 
  Then Mass edit screen is displayed successfully
  And verify that <Open_txtFields> and <UI_buttons> are displayed successfully
  
  Examples:
  
  |            Open_txtFields             |    UI_buttons      |
  | "Contract/PBP/Segment/Year;Plan Name" | "Update;Cancel"    |
 
	Scenario Outline: Validate the Information message on the Clinical MassEdit Screen
	
	Given User navigates to MAPS UI screen
  When User clicks on Clinical Setup link under Plan Menu
  And Clinical Search screen is displayed
  And Click on Search Plan button and results are displayed
  And Select atleast one plan by clicking on checkbox 
  And click on MassUpdate button 
  Then Mass edit screen is displayed successfully
  And <Info_message> is displayed
  
    Examples:
  
  |                       Info_message                                                            |
  | "The data you are entering here will be instantly applied to the production MAPS Plan record" |
  
  @SystemTest
  Scenario Outline: Verify functionality of Dropdown controls on Clinical MassEdit Screen
	Given User Navigates to the Clinical Search Screen
  When Search results are displayed after clicking on Search button
  And click on MassUpdate button
  Then Clinical MassEdit screen is displayed
  And verify that user is able to select any one of the values from <HouseCalls_Val> after clicking on Enable checkbox
  And verify that user is able to select any one of the values from <SocialGov_Val> after clicking on Enable checkbox
 
    
    Examples: 
			   | 			HouseCalls_Val				   |			SocialGov_Val			   |  
			  | "Blank;Included;Not Included" | "Blank;Included;Excluded" |
			
		Scenario Outline: Validate the Information message on the Clinical MassEdit Screen
	
	Given User navigates to MAPS UI screen
  When User clicks on Clinical Setup link under Plan Menu
  And Clinical Search screen is displayed
  And Click on Search Plan button and results are displayed
  And  atleast one plan is not selected then warning message will be displayed 
  And click on MassUpdate button 
  Then Mass edit screen is displayed successfully
  And <Info_message> is displayed
  
    Examples:
  
  |                       Info_message     |
  | "'You must select at least one record" |
			
			
		Scenario Outline: Validate the Information message on the Clinical MassEdit Screen
	
	Given User navigates to MAPS UI screen
  When User clicks on Clinical Setup link under Plan Menu
  And Clinical Search screen is displayed
  And Click on Search Plan button and results are displayed
  And Select atleast one pbp by clicking on checkbox
  And click on MassUpdate button 
  Then Mass edit screen is displayed successfully
  And <Info_message> is displayed on the bottom of the screen.
  
    Examples:
  
  |                       Info_message     |
  | "The following plans will be updated"  |
	@SystemTest
  Scenario Outline: Verify Mass edit grid layout on Clinical MassEdit Screen
	Given User Navigates to the Clinical Search Screen
  When Search results are displayed after clicking on Search button
  And click on MassUpdate button
  Then Clinical MassEdit screen is displayed
  And verify that user is able to select any one of the values from <HouseCalls_Val> after clicking on Enable checkbox
  And verify that user is able to select any one of the values from <SocialGov_Val> after clicking on Enable checkbox
  And Click on update button
  And verify the data for <HouseCalls_Val>,<SocialGov_Values> ,<SNPTYPE> and <Brand>
    
    Examples:
			 | 			HouseCalls_Val				   |			SocialGov_Val			   |SNP TYPE        |Brand|
		   | "Blank;Included;Not Included" | "Blank;Included;Excluded" | "Dual Eligible"| "AARP|
			  
 Scenario Outline: Verify functionality of Cancel button on Clinical Mass Edit Screen
Given Navigate to the Clinical MassEdit Screen
  When user selects any one of the values from <HouseCalls_Val> after clicking on Enable checkbox
  And also Select any one of the values from <SocialGov_Val> after clicking on Enable checkbox
  Then Click on cancel button
  And Verify that user is back to the clinical Edit screen with no update

Examples: 
|	HouseCalls_Val	              |	SocialGov_Val	            |                  
| "Blank;Included;Not Included" | "Blank;Included;Excluded" |