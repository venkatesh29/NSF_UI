package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class IGE_Homepage_pageObjects {
	public static WebElement Mapping_Configuration_Link(WebDriver driver) {
		return driver.findElement(By.xpath(".//*[@href='/Admin/IGEConfig/UsrAction?UsrActionName=Mapping']"));
	}

	public static WebElement Validation_Configuration_Link(WebDriver driver) {
		return driver.findElement(By.xpath(".//*[@href='/Admin/IGEConfig/UsrAction?UsrActionName=Validation']"));
	}

	public static WebElement Transform_Configuration_Link(WebDriver driver) {
		return driver.findElement(By.xpath(".//*[@href='/Admin/IGEConfig/UsrAction?UsrActionName=Transform']"));
	}

	public static WebElement versionControl_Link(WebDriver driver) {
		return driver.findElement(By.xpath("//a[text()='Setting Version Control']"));
	}

	public static WebElement runtimeSettings_Link(WebDriver driver) {
		return driver.findElement(By.xpath("//a[text()='Runtime Settings']"));
	}
}
