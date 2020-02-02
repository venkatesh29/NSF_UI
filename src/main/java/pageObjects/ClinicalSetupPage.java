package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import miscellaneous.BaseClass;

public class ClinicalSetupPage extends BaseClass {
	
	

	public ClinicalSetupPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	public static Select year_dropdown() {
		return new Select(driver.findElement(By.xpath("//select[@id='PlanYear']")));
	}
	
	public static Select houseCalls_dropdown() {
		return new Select(driver.findElement(By.xpath("//select[@id='PlanYear']")));
	}
	
	public static Select socialGov_dropdown() {
		return new Select(driver.findElement(By.xpath("//select[@id='PlanYear']")));
	}
	
	public static WebElement contract_textField() {
		return driver.findElement(By.xpath("//input[@id='ContractNumber']"));
	}
	
	public static WebElement year_WebElement() {
		return driver.findElement(By.name("PlanYear"));
	}
	
	public static WebElement brand_WebElement() {
		return driver.findElement(By.name("Brand"));
	}
	
	public static WebElement houseCalls_WebElement() {
		return driver.findElement(By.name("HouseCalls"));
	}
	public static WebElement socialGov_WebElement() {
		return driver.findElement(By.name("SocialGovernance"));
	}
	
	public static WebElement snpType_WebElement() {
		return driver.findElement(By.name("SNPType"));
	}
	
	public static WebElement PBP_textField() {
		return driver.findElement(By.xpath("//input[@id='PBPNumber']"));
	}
	
	public static WebElement Segment_textField() {
		return driver.findElement(By.xpath("//input[@id='Segment']"));
	}
	
	public static WebElement ClinicalSerachHeader_Label() {
		return driver.findElement(By.xpath("//html/body/div[2]/h1"));
	}
	
	public static Select SNPtype_dropdown() {
		return new Select(driver.findElement(By.xpath("//select[@id='SNPType']")));
	}

	public static Select brand_dropdown() {
		return new Select(driver.findElement(By.xpath("//select[@id='Brand']")));
	}
	public static WebElement massDataUpdate_button() {
		return driver.findElement(By.xpath("//input[@id='btnMassUpdate']"));
	}
	
	//Update
	public static WebElement search_button() {
		return driver.findElement(By.xpath("//input[@id='btnMassUpdate']"));
	}
	
	//Update
	public static WebElement exportResults_button() {
		return driver.findElement(By.xpath("//input[@id='btnMassUpdate']"));
	}

	public static Select orderBy_dropdown() {
		return new Select(driver.findElement(By.xpath("//select[@id='PlanPCPRequiredValue']")));
	}
	public static WebElement SearchResultsTableColumnHeadings() {
		return driver.findElement(By.xpath("//table/tbody/tr"));
	}

	public static WebElement searchResultsTableAllRows() {
		return driver.findElement(By.xpath("//table/tbody/tr"));
	}

	public static WebElement searchResultsTableSingleRow_(int rowNumber) {
		return driver.findElement(By.xpath("//table/tbody/tr[" + rowNumber + "]"));
	}

	public static WebElement SearchPlanButton() {
		return driver.findElement(By.xpath("//input[@id='SearchPlanButton']"));
	}

	public static WebElement Editlink() {	
		return driver.findElement(By.xpath(""));
	}

	public static WebElement Plan_result() {
        return driver.findElement(By.xpath(""));
		
	}	
	}

