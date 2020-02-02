#Author:Hema
@SystemTest123
Feature: NSF - Sample UI script
Scenario Outline: verifying script database changes for the <Field_name> in the <Dbo_Table> <Audit_Table>
      Given User login to the SQL server and connect to the <Test_Database> environment
      When the user executes the query for the <Field_name> in the <Dbo_Table> and <Audit_Table>
      Then verify that fields exists in <Dbo_Table> <Audit_Table> and the <length> for the <Field_name> should be valid
      
      
  Examples: 
      | Test_database |Field_name                            |length       | Audit_Table                |Dbo_Table                    |
      | "DBSET1775"   | "HouseCallsProgram"                  | "VARCHAR20" | "IndividualPlanDemographic" | "IndividualPlanDemographic" |       
      | "DBSET1775"   | "SocialGovReferralAssistanceProgram" | "VARCHAR20" | "IndividualPlanDemographic" | "IndividualPlanDemographic" |
 
 #NOTE:
#select  HouseCallsProgram,SocialGovReferralAssistanceProgram, * from dbo.IndividualPlanDemographic
#select  HouseCallsProgram,SocialGovReferralAssistanceProgram, * from Audit.IndividualPlanDemographic