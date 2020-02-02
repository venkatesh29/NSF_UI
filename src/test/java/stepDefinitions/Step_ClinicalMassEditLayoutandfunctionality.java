	package stepDefinitions;
	import org.apache.poi.ss.usermodel.Sheet;
	import org.openqa.selenium.JavascriptExecutor;
	import org.openqa.selenium.Keys;
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
	import pageObjects.Header;
	//import pageObjects.IndividualPage;
	import pageObjects.JSON_Mapping_pageObjects;
	import utilities.Constants;
	import utilities.Utils;

	public class Step_ClinicalMassEditLayoutandfunctionality{
		static WebDriver driver;
		public static Sheet JSheet, MSheet;
		public Step_ClinicalMassEditLayoutandfunctionality() {
				this.driver = Hooks.driver;
	    }
		
		
	@Given("^User navigates to MAPS UI screen$")
	public void user_navigates_to_MAPS_UI_screen() throws Throwable {
			try {
				Utils.insertScreenshotForthisStep(driver, "Home_Page");
				if(Header.Plan_dropdown(driver).isDisplayed()){
					System.out.println("User is on home page");
					Assert.assertTrue(Header.group_dropdown(driver).isDisplayed(), "User is on home page");
				}
				else{
					System.out.println("Failed to login to MAPS application");
				}		   
		    } catch(Exception e) {
		    	Assert.fail("Failed to Launch MAPS web UI");
		    }
	}

	@When("^User clicks on Clinical Setup link under Plan Menu$")
	public void user_clicks_on_Clinical_Setup_link_under_Plan_Menu() throws Throwable {
			try {
				//Click on header for Plan -->Clinical Setup Link
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

//	@And("^Clinical search screen is displayed$")
//	public void Clinical_search_screen_is_displayed() throws Throwable {
//		try {
//			Utils.insertScreenshotForthisStep(driver, "Clinical_search_page");
//			if(IndividualPage.ClinicalSearchScreen(driver).isDisplayed()){
//				System.out.println("User is on Clinical search page");
//				Assert.assertTrue(IndividualPage.ClinicalSearchScreen(driver).isDisplayed(), "User is on ClinicalSearch page");
//			}
//			else{
//				System.out.println("Failed to login to MAPS application");
//			}		   
//	    } catch(Exception e) {
//	    	Assert.fail("Failed to navigate to Clinical search page");
//	    }
//	}
//	@And("Click on Search Plan button and results are displayed")
//	public void Click_search_Plan_button_and_results_are_displayed() throws Throwable {
//		try {
//			driver.findElement(By.name("searchbutton")).click();
//			Utils.waitForPageToLoad(driver);
//			Header.ClinicalSetup_link(driver).click();
//			if(IndividualPage.ClinicalSearchScreen(driver).isDisplayed()){
//				System.out.println("User is on Clinical Search button and results will be displayed");
//				Assert.assertTrue(ClinicalSetupPage.contract_textField().isDisplayed(), "User is on ClinicalSetup Search page");
//			}
//		}
//		else{
//			System.out.println("Failed to navigate to ClinicalsearchButton");
//		}			
//    } catch(Exception e) {
//    	Assert.fail("Failed to click on ClinicalSearchbutton");
//    }
	}
//	@And
