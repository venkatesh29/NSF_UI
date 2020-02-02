#Author:Hema
#@SystemTest123
Feature: NSF - Script Database changes For Network name 
Scenario Outline: verifying script database changes for the <Field_name> in the <Dbo_Table> <Audit_Table>
      Given User login to the SQL server and connect to the <Test_Database> environment
      When the user executes the query for the <Field_name> in the <Dbo_Table> and <Audit_Table>
      Then verify that fields exists in <Dbo_Table> <Audit_Table> and the <length> for the <Field_name> should be valid
      
      
   Examples: 
      | Test_database |Field_name     |length      | Audit_Table|Dbo_Table |
      | "DBSET2037"   | "Networkname" | "VARCHAR50"| "Group"    | "Group" |       
      | "DBSET2037"   | "Networkname" | "VARCHAR50"| "Group"    | "Group" |
 
 # select NetworkName,* from dbo.[Group]
 # select NetworkName,* from audit.[Group]