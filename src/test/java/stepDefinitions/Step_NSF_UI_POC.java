package stepDefinitions;
import org.apache.poi.ss.usermodel.Sheet;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import com.aventstack.extentreports.Status;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.Header;
import pageObjects.JSON_Mapping_pageObjects;
import utilities.Constants;
import utilities.Utils;

public class Step_NSF_UI_POC {
	static WebDriver driver;
	public static Sheet JSheet, MSheet;
	public Step_NSF_UI_POC() {
		this.driver = Hooks.driver;
	}
	
//@Given("^User navigates to MAPS UI screen$")
//public void user_navigates_to_MAPS_UI_screen() throws Throwable {
//		try {
//			Utils.insertScreenshotForthisStep(driver, "Home_Page");
//			if(Header.Materials_List(driver).isDisplayed()){
//				System.out.println("User is on home page");
//				Assert.assertTrue(Header.group_dropdown(driver).isDisplayed(), "User is on home page");
//			}
//			else{
//				System.out.println("Failed to login to MAPS application");
//			}		   
//	    } catch(Exception e) {
//	    	Assert.fail("Failed to Launch MAPS web UI");
//	    }
//}
	
@When("^User clicks on Component Code link under Materials Dropdown$")
public void user_clicks_on_Component_Code_link_under_Materials_Dropdown() throws Throwable {
	try {
		//Click on header for materials
		Header.Materials_List(driver).click();
		Utils.waitForPageToLoad(driver);
    	System.out.println("Successfully clicked on Materials link");
		//click on component code
		Header.componentCode_dropdown(driver).click();
		Utils.waitForPageToLoad(driver);
    } catch(Exception e) {
    	Assert.fail("Failed to click on component code link");
    }
}

@Then("^Component code screen is diplayed with header as Component code records$")
public void component_code_screen_is_diplayed_with_header_as_Component_code_records() throws Throwable {
	try {
		Utils.insertScreenshotForthisStep(driver, "ComponentCode_Page");
		if(Header.ComponentCode_btn(driver).isDisplayed()){
			System.out.println("User is on Component page");
			Assert.assertTrue(Header.ComponentCode_btn(driver).isDisplayed(), "User is on ComponentCode page");
		}
		else{
			System.out.println("Failed to login to MAPS application");
		}		   
    } catch(Exception e) {
    	Assert.fail("Failed to navigate to Component Code page");
    }
}
	}