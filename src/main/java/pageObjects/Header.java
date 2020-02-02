package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Header {
	
	public static WebElement group_dropdown(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Group ')]"));
	}
	
	public static WebElement IGE_dropdown(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Admin ')]"));
	}

	public static WebElement groupInstall_link(WebDriver driver) {
		return driver.findElement(By.xpath("//a[@href='/GroupInstall']"));
	}
	
	public static WebElement IGE_link(WebDriver driver) {
		return driver.findElement(By.xpath("//a[@href='/Admin/IGE']"));
	}
	
	public static WebElement componentCode_dropdown(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Component Codes')]"));
	}
	
	public static WebElement Materials_List(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Materials')]"));
	}
	public static WebElement ComponentCode_btn(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Upload File Template')]"));
	}

	public static WebElement Plan_dropdown(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Plan')]"));
	}
	public static WebElement ClinicalSetup_link(WebDriver driver) {
		return driver.findElement(By.xpath("//a[contains(text(),'Clinical Setup')]"));
		}


	}



