package runners;

import java.io.File;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "./Features/NSF_UI_POC.feature", glue = {
	"stepDefinitions" }, dryRun = false, plugin = { "com.cucumber.listener.ExtentCucumberFormatter:", "pretty",
	"html:cucumber_reports/HTML/POC.html" }, monochrome = true, tags = { "@Smoke2" })
public class NSF_UI_POC extends AbstractTestNGCucumberTests {
	@AfterClass
	public static void teardown() {
	Reporter.loadXMLConfig(new File("./src/test/resources/extent-config.xml"));
	Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	Reporter.setSystemInfo("Platform", "Windows 7");
	Reporter.setSystemInfo("Environment", "QA");
	}
}