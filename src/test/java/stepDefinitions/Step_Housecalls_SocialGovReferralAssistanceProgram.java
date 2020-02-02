package stepDefinitions;

import java.sql.ResultSet;
import java.util.LinkedHashMap;

import org.apache.poi.ss.usermodel.Sheet;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

//import com.aventstack.extentreports.Status;

//import cucumber.api.PendingException;
//import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import pageObjects.JSON_Mapping_pageObjects;
import utilities.Constants;
import utilities.Utils;

public class Step_Housecalls_SocialGovReferralAssistanceProgram {	
	static WebDriver driver;
	public static Sheet JSheet, MSheet;
	public static String str_Query,str_TableName,str_ColumnName,str_FieldName;
	public static ResultSet resultset1;
	
	public Step_Housecalls_SocialGovReferralAssistanceProgram() {
		this.driver = Hooks.driver;
	}
	
//	@Given("^User login to the SQL server and connect to the (.*) environment$")
//	public void query_for_new__table_is_received_as(String str_Database) throws Throwable {
//		try {
//	    	if((!(str_Database.isEmpty()))){
//	    		Assert.assertTrue((!(str_Database.isEmpty())), "Query is received for dbo.table");
//	    	}
//	    } catch(Exception e) {
//	    	Assert.fail("Empty query or Incorrect table data is received");
//	    }
//	}

//	@When("^the user executes the query for the (.*) in the (.*) and (.*)$")
//	public void new_dbo_Table_query_is_executed(String str_FieldName,String str_dboTable,String str_AuditTable ) throws Throwable {
//		try {
//			String str_dboQuery = "select Column_Name,Character_Maximum_Length,Data_Type from information_Schema.columns where column_name = '"+str_FieldName+"' and Table_Schema='dbo'";
//			String str_AuditQuery = "select Column_Name,Character_Maximum_Length,Data_Type from information_Schema.columns where column_name = '"+str_FieldName+"' and Table_Schema='Audit'";
//			
//			Utils.connectToSqlserverDB();
//			Constants.resultset = Constants.statement.executeQuery(str_dboQuery);
//			
//			resultset1 = Constants.statement.executeQuery(str_AuditQuery);
//			
//			
//	    } catch(Exception e) {
//	    	Assert.fail("Failed to execute query "+str_Query);
//	    }
//	}

	@Then("^verify that fields exists in (.*) (.*) and the (.*) for the (.*) should be valid$")
	public void new_table_schema_exist_in_database(String str_TableName) throws Throwable {
try {
	
	//Query 1
	Constants.resultsetMetadata = Constants.resultset.getMetaData();
	LinkedHashMap<String, String> DBresults = new LinkedHashMap<String, String>();
	for (int k = 0; Constants.resultset.next(); k++) {
		for (int j = 1; j <= Constants.resultsetMetadata.getColumnCount(); j++) {
			DBresults.put(Constants.resultsetMetadata.getColumnName(j), Constants.resultset.getString(j));
		}
	for (String value : DBresults.values()) {
		System.out.println(value);
		Assert.assertTrue(!(value.equalsIgnoreCase("HouseCallsProgram")), "Column Name is " +value  );
		Assert.assertTrue(!(value.contains("varchar")), "Column Name is " +value  );	
		Assert.assertTrue(!(value.contains("20")), "Column Name is " +value  );	
	}}
	
	//Query 2
	Constants.resultsetMetadata = resultset1.getMetaData();
	LinkedHashMap<String, String> DBresults1 = new LinkedHashMap<String, String>();
	for (int k = 0; resultset1.next(); k++) {
		for (int j = 1; j <= Constants.resultsetMetadata.getColumnCount(); j++) {
			DBresults.put(Constants.resultsetMetadata.getColumnName(j), Constants.resultset.getString(j));
		}
		for (String value : DBresults.values()) {
			System.out.println(value);
			Assert.assertTrue(!(value.equalsIgnoreCase("SocialGovReferralAssistanceProgram")), "Column Name is " +value  );
			Assert.assertTrue(!(value.contains("varchar")), "Column Name is " +value  );	
			Assert.assertTrue(!(value.contains("20")), "Column Name is " +value  );	
	}}
	    	
	    } catch(Exception e) {
	    	Assert.fail("Failed to find table schema "+str_TableName);
	    }
	}


}