package dataExport;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import utilities.ExcelFileUtil;

public class DataExport2 {

	public static void main(String[] args) throws Throwable {
		
		ArrayList<String> outputList = new ArrayList<String>();
		
		
		ExcelFileUtil exl=new ExcelFileUtil();
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\VENKATESH_VILLA\\eclipse-workspace\\NSF_UI\\Lib\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		
		driver.get("https://staging.pk-ems.com/emsclientqav4/#/Login");
		
		driver.manage().window().maximize();
		
		Thread.sleep(1000);
		
		driver.findElement(By.id("txtUsername")).sendKeys("murali");
		driver.findElement(By.id("txtPassword")).sendKeys("Demo@123");
		driver.findElement(By.xpath("//*[@id=\"btnLogin\"]/button")).click();
		
		Thread.sleep(10000);
		
		driver.findElement(By.xpath("//a[@class='client-name triggerArrow']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//a/img[@alt='Citi']")).click();
		
		
		Thread.sleep(1000);
		driver.findElement(By.linkText("WORKSPACE")).click();
		
		//to perform Scroll on application 
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,-350)", "");
        
        driver.findElement(By.xpath("//div[contains(text(),'List View')]")).click();

		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),'SEARCH')]")).click();
		
		Thread.sleep(10000);
		
		int i =0;
		while(i<=7) {
			
			if(i==7) {
				    iteration(driver,outputList);
			}
			
			if(i<7) {
				String xpath="//div[contains(@id,'row"+i+"')]/div";
				List<WebElement> allCells=driver.findElements(By.xpath(xpath));
				
				for(int j=0;j<allCells.size();j++) {
					String cellValue=allCells.get(j).getText();	
					outputList.add(cellValue);
				}	
			}	
		    i++;	
	   }
		
	   for(int k=0;k<outputList.size();k++) {
		   
		   int reqRow=1;
		   
//		   for(int m=0;m<10;m++) {

			   if(k==0 || k<10) {
				   reqRow=k/10;   
			   }else {
				   reqRow=k/10;
			   }
			   reqRow=reqRow+1;
			   
			   
			   
			   System.out.println(reqRow+" "+outputList.get(k));
			   
			   
			   
//		   }
//		   System.out.println("================ "+reqRow+" ================");
//		   System.out.println(outputList.get(k));	
	   }
			
	   driver.close();
	}
	
	public static void iteration(WebDriver driver,ArrayList outputList) throws Exception {
		int i=4;
		while(i<=6) {	
			 Actions act=new Actions(driver);					
			 WebElement From=driver.findElement(By.xpath("(//*[contains(@id,'jqxScrollThumbverticalScrollBarjqxWidget')])[2]"));
			 act.dragAndDropBy(From,135, 120).build().perform();
			    
			String xpath="//div[contains(@id,'row"+i+"')]/div";
			
			List<WebElement> allCells=driver.findElements(By.xpath(xpath));
			Thread.sleep(5000);
			for(int j=0;j<allCells.size();j++) {
				String cellValue=allCells.get(j).getText();	
				outputList.add(cellValue);
			}
			i++;
		}
	}
}	