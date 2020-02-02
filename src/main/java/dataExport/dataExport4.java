package dataExport;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import utilities.ExcelFileUtil;

public class dataExport4 {

	public static void main(String[] args) throws Throwable {
		
		ArrayList<String> outputList = new ArrayList<String>();
		ArrayList<ArrayList<String>> mainList = new ArrayList<ArrayList<String>>();
		
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
		
		to perform Scroll on application 
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,-350)", "");
        
        driver.findElement(By.xpath("//div[contains(text(),'List View')]")).click();

		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),'SEARCH')]")).click();
		
		Thread.sleep(10000);
		
		ExcelFileUtil exl=new ExcelFileUtil();
		
		int i =0;
		while(i<=10) {
			 
			if(i<7) {	
				String xpath="//div[contains(@id,'row"+i+"')]/div/div";
//				WebElement allRows=driver.findElement(By.xpath(xpath));
				
				List<WebElement> cells=driver.findElements(By.xpath(xpath));

				for(int k=0;k<cells.size();k++) {
					if(k==0) {
						outputList.clear();
					}
					String cellValue=cells.get(k).getText();
//					System.out.println(cellValue);
					outputList.add(cellValue);
					if(cellValue.isEmpty()==false) {
						exl.setData("Citi", i+1, k, cellValue);
					}
					
				}	
  
//				System.out.println("======== "+(i+1)+" ========");
    
			}   

			if(i==7) {
				iteration(driver,outputList,mainList);  
			    break;
			}
			
		    i++;	  
	    }	 
		// driver.close();
	}
	
	public static void iteration(WebDriver driver,ArrayList<String> outputList,ArrayList<ArrayList<String>> mainList) throws Throwable {
		
		 for(int j=1;j<=3;j++) {
		 Actions act=new Actions(driver);					
		 WebElement From=driver.findElement(By.xpath("(//*[contains(@id,'jqxScrollThumbverticalScrollBarjqxWidget')])[2]"));
		 act.dragAndDropBy(From,135, 120).build().perform();
		 }
		 
		 ExcelFileUtil exl=new ExcelFileUtil();
		 
		int i=4;
		while(i<=6) {
			
			 	    
			 String xpath="//div[contains(@id,'row"+i+"')]/div/div";
//			 WebElement allRows=driver.findElement(By.xpath(xpath));
				
			List<WebElement> cells=driver.findElements(By.xpath(xpath));
			
			outputList.clear();
			for(int k=0;k<cells.size();k++) {
				String cellValue=cells.get(k).getText();
				outputList.add(cellValue);
				if(cellValue.isEmpty()==false) {
					exl.setData("Citi", i+4, k, cellValue);
				}
			}	
			
//			System.out.println("======== "+(i+4)+" ========");
//		    System.out.println(i+" : "+outputList);
//		    mainList.add(outputList);
			i++;
		}
	}

}
