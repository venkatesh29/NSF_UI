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

public class dataExport3 {

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
		
		//to perform Scroll on application 
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,-350)", "");
        
        driver.findElement(By.xpath("//div[contains(text(),'List View')]")).click();

		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),'SEARCH')]")).click();
		
		Thread.sleep(10000);
		
		
		
		int i =0;
		while(i<=10) {
			
			
				mainList.add(outputList);
		
			
			if(i<7) {
				
				String xpath="//div[contains(@id,'row"+i+"')]";
				List<WebElement> allRows=driver.findElements(By.xpath(xpath));
				
				for(int j=0;j<allRows.size();j++) {
					
					if(outputList.isEmpty()==false) {
						mainList.add(outputList);
					}
					
					outputList.clear();
					List<WebElement> cells=allRows.get(j).findElements(By.tagName("div"));
					
					for(int k=0;k<cells.size();k++) {
						String cellValue=cells.get(k).getText();
						outputList.add(cellValue);
					}			
					
//					System.out.println("======== "+i+" ========");
//				    System.out.println(outputList);
					
				}	
			}
				
			if(i==7) {
				iteration(driver,outputList,mainList);  
			    break;
			}
		    i++;	
		  
	   }
		
		System.out.println(mainList);
		
//		ExcelFileUtil exl=new ExcelFileUtil();
//		
//		int ms=1;
//		while(ms<=10) {
//			
//			int reqRow=ms;
//			
//			ArrayList<String>exlList=mainList.get(ms-1);
//			
//			System.out.println("=========== "+reqRow+" ==========");
//			
//			for(String s:exlList) {
//				System.out.println(s);
//			}
//			
//			ms++;
//		}
		
		 driver.close();

	}
	
	public static ArrayList<ArrayList<String>> iteration(WebDriver driver,ArrayList<String> outputList,ArrayList<ArrayList<String>> mainList) throws Exception {
		
//		for(int main=0;main<mainList.size();main++) {
//			System.out.println(mainList.get(main));
//		}
		
		int i=4;
		while(i<=6) {	
			 Actions act=new Actions(driver);					
			 WebElement From=driver.findElement(By.xpath("(//*[contains(@id,'jqxScrollThumbverticalScrollBarjqxWidget')])[2]"));
			 act.dragAndDropBy(From,135, 120).build().perform();
			    
			String xpath="//div[contains(@id,'row"+i+"')]";
			List<WebElement> allRows=driver.findElements(By.xpath(xpath));
			
			for(int j=0;j<allRows.size();j++) {
				outputList.clear();
				List<WebElement> cells=allRows.get(j).findElements(By.tagName("div"));
				
				for(int k=0;k<cells.size();k++) {
					String cellValue=cells.get(k).getText();
					outputList.add(cellValue);
				}
//				System.out.println("======== "+i+" ========");
//				System.out.println(outputList);
				
//				int s=mainList.size();
//				mainList.add(s-1,new ArrayList(outputList));
			}	
			i++;
		}
		return mainList;
	}

}
