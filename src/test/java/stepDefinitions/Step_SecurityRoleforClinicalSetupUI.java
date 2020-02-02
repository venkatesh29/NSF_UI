package stepDefinitions;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;

import org.apache.poi.ss.usermodel.Sheet;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import com.aventstack.extentreports.Status;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.ClinicalSetupPage;
//import pageObjects.ClinicalSetupPage;
import pageObjects.Header;
import utilities.Constants;
import utilities.Utils;

public class Step_SecurityRoleforClinicalSetupUI {
	static WebDriver driver;
	public Step_SecurityRoleforClinicalSetupUI() {
		this.driver = Hooks.driver;
	}

		@Given("^User with no access to (.*) navigates to MAPS Web Application$")
		public void User_with_no_access_to_secure_groups_navigates_to_MAPS_Web_Application() throws Throwable {
			try {
				Utils.insertScreenshotForthisStep(driver, "Home_Page");
				if(Header.Plan_dropdown(driver).isDisplayed()){
					System.out.println("User is on home page");
					Assert.assertTrue(Header.Plan_dropdown(driver).isDisplayed(), "User is on home page");
				}
				else{
					System.out.println("Failed to login to MAPS application");
				}		   
		    } catch(Exception e) {
		    	Assert.fail("Failed to Launch MAPS web UI");
		    }
		}
	

	@When("^User clicks on Clinical link under Plan Menu$")
	public void user_clicks_on_Clinical_link_under_Plan_Menu() throws Throwable {
		try {
			
			Header.Plan_dropdown(driver).click();
			Utils.waitForPageToLoad(driver);
			Header.ClinicalSetup_link(driver).click();
			Utils.waitForPageToLoad(driver);
			if(ClinicalSetupPage.contract_textField().isDisplayed()){
				System.out.println("User is on ClinicalSetup Search page");
				Assert.assertTrue(ClinicalSetupPage.contract_textField().isDisplayed(), "User is on ClinicalSetup Search page");
			}
			else{
				System.out.println("Failed to navigate to ClinicalSetup Search page");
			}			
	    } catch(Exception e) {
	    	Assert.fail("Failed on ClinicalSetup Search page");
	    }
	}
	

	@Then("^Clinical Setup link will be disabled$")
	public void Clinical_Setup_link_will_be_disabled() throws Throwable {
		try {
			Header.Plan_dropdown(driver).click();
			Utils.waitForPageToLoad(driver);
			if(!(Header.ClinicalSetup_link(driver).isEnabled()))
					{
				System.out.println("User is able to click on CLinical setup link even without access");	}
			
			  else
				{
					System.out.println("User doesn't have access to this group");	
				}
			
		}
			
			catch(Exception e )
			{
				Assert.fail("Failed on ClinicalSetup Search page");
		    }
}}
