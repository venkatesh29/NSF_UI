package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class JSON_Mapping_pageObjects {
	
		public static WebElement Admin_List(WebDriver driver) {
			return driver.findElement(By.xpath("//a[contains(text(),'Admin')]"));
		}
		
		public static WebElement IGE_Option(WebDriver driver) {
			return driver.findElement(By.xpath("//a[@href='/Admin/IGE']"));
		}
		
		public static WebElement group_link(WebDriver driver) {
			return driver.findElement(By.xpath("//a[contains(text(),'Group ')]"));
		}
		
		public static WebElement groupInstall_link(WebDriver driver) {
			return driver.findElement(By.xpath("//a[@href='/GroupInstall']"));
		}
		
		public static WebElement groupInstall_Classifiation(WebDriver driver) {
			return driver.findElement(By.xpath("//label[contains(text(),'Group Classification')]"));
		}
		
		public static WebElement groupInstall_ContractYear(WebDriver driver) {
			return driver.findElement(By.xpath("//label[contains(text(),'Contract Year')]"));
		}
		public static WebElement groupInstall_ContractYearIcon(WebDriver driver) {
			return driver.findElement(By.xpath("/html/body/div[2]/form/div[1]/div/div[1]/div[1]/div[1]/span/a/span[1]"));
		}
		
		public static WebElement groupInstall_ContractYearPrev(WebDriver driver) {
			return driver.findElement(By.xpath("//div[contains(text(),'2018')]"));
		}
		
		public static WebElement groupInstall_ContractYearCurr(WebDriver driver) {
			return driver.findElement(By.xpath("//div[contains(text(),'2019')]"));
		}
		
		public static WebElement groupInstall_GroupStatusIcon(WebDriver driver) {
			return driver.findElement(By.xpath("/html/body/div[2]/form/div[1]/div/div[1]/div[3]/div[3]/span/a/span[1]"));
		}
		public static WebElement groupInstall_GroupStatusAll(WebDriver driver) {
			return driver.findElement(By.xpath("//div[contains(text(),'All Active Groups')]"));
		}
		
		public static WebElement groupInstall_GroupStatusAborted(WebDriver driver) {
			return driver.findElement(By.xpath("//div[contains(text(),'Aborted')]"));
		}
		
		public static WebElement groupInstall_Status(WebDriver driver) {
			return driver.findElement(By.xpath("//label[contains(text(),'Group Status')]"));
		}
		
		public static WebElement groupInstall_Search(WebDriver driver) {
			return driver.findElement(By.xpath("//*[@id='SearchGroupButton']"));
		}
		
		public static WebElement MAPSConversionSimulator_link(WebDriver driver) {
			return driver.findElement(By.xpath("//a[contains(text(),'MAPS Conversion Simulator')]"));
		}

		public static WebElement version_dropdown(WebDriver driver) {
			return driver.findElement(By.xpath("//*[@id='VersionID']"));
		}

		public static WebElement Source_TextField(WebDriver driver) {
			return driver.findElement(By.xpath("//*[@id='JsonTransferText']"));
		}
		
		public static WebElement Unified_TextField(WebDriver driver) {
			return driver.findElement(By.xpath("//*[@id='ConvertedText']"));
		}
		
		public static WebElement Covert_Button(WebDriver driver) {
			return driver.findElement(By.xpath("//input[@class='btn btn-primary' and @ value='Convert']"));
		}
		public static WebElement ImportAsTransfer_Button(WebDriver driver) {
			return driver.findElement(By.xpath("//input[@id='bImport']"));
		}
		public static WebElement PromoteAsStage_Button(WebDriver driver) {
			return driver.findElement(By.xpath("//input[@id='bPromote']"));
		}
		public static WebElement Clear_Button(WebDriver driver) {
			return driver.findElement(By.xpath("//input[@value='Clear']"));
		}
		
		public static WebElement ImportedItem_Label(WebDriver driver) {
			return driver.findElement(By.xpath("//label[contains(text(),'Imported TransferItem record:')]"));
		}
		
		public static WebElement ImportedItemId_Link(WebDriver driver) {
			return driver.findElement(By.xpath("//a[contains(@href,'/Admin/IGETransfer/TransferItemText?TransferItemId')]"));
		}

		public static WebElement PromotedSourceFileID_Label(WebDriver driver) {
			return driver.findElement(By.xpath("//label[contains(text(),'Promoted to SourceFileDetailFinalID:')]"));
		}
}
