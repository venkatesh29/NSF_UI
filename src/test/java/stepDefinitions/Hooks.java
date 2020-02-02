package stepDefinitions;

import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
//import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import miscellaneous.BaseClass;
import utilities.BuildParameters;
import utilities.Constants;
import utilities.Utils;

public class Hooks {
	public static WebDriver driver;

	@After
	public void closeDriver(Scenario scenario) {
		System.out.println("=================================");
		System.out.println(scenario.getName() + " : Status : " + scenario.getStatus());
		System.out.println("=================================");

		driver.close();
		driver.quit();
	}

	@AfterMethod
	void tearDownBrowser() {
		driver.close();
	}

	@Before
	public void openBrowser(Scenario scenario) throws Exception, IOException {
		System.out.println("=================================");
		System.out.println("Starting : " + scenario.getName());
		System.out.println("=================================");

		// driver = Utils.getDriver_IE();
//		System.setProperty("webdriver.ie.driver", "./Lib/IEDriverServer.exe");
//		DesiredCapabilities cap = DesiredCapabilities.internetExplorer();
//		cap.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
//		cap.setCapability("ignoreZoomSetting", true);
//		cap.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
//		cap.setCapability(InternetExplorerDriver.NATIVE_EVENTS, false);
//		cap.setCapability(InternetExplorerDriver.UNEXPECTED_ALERT_BEHAVIOR, false);
//		driver = new InternetExplorerDriver(cap);
		
		System.setProperty("webdriver.chrome.driver", "./Lib/chromedriver.exe");
		driver = new ChromeDriver();
		new BaseClass(driver);
		driver.manage().window().maximize();
		Constants.startInfobank();
		driver.get(Constants.MAPS_UI_URL);
		//driver.get("http://maps-ui-tst4.mhars1.optum.com/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

}
