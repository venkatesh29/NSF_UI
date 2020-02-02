package dataExport;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

public class DataExport1 {
  @Test
  public void f() throws Exception {
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
		
		
//		WebDriverWait wait=new WebDriverWait(driver, 120);
//		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(text(),'List View')]")));
		
		
		//to perform Scroll on application using Selenium
      JavascriptExecutor js = (JavascriptExecutor) driver;
//      WebElement listView=driver.findElement(By.xpath("//div[contains(text(),'List View')]"));
      js.executeScript("window.scrollBy(0,-350)", "");
     driver.findElement(By.xpath("//div[contains(text(),'List View')]")).click();
		
//		Thread.sleep(5000);
//		Actions act=new Actions(driver);
//		WebElement listView=driver.findElement(By.xpath("//div[contains(text(),'List View')]"));
//		act.moveToElement(listView).click().build().perform();
		
		
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[contains(text(),'SEARCH')]")).click();
		
		Thread.sleep(10000);
		
		List<WebElement> allRows=driver.findElements(By.xpath("//div[@role='row']"));
		
//		System.out.println(allRows.size());
		
		for(int i=0;i<allRows.size();i++){
			System.out.println("");
			List<WebElement> allCells=driver.findElements(By.xpath("(//div[@role='row'])["+(i+1)+"]/div/div"));
//			if(i==0) {
//			System.out.println("---------------------------------------------------------------------------------");
//			}
			for(int j=0;j<allCells.size();j++) {
				
				//int k=j+1;
				
				
				if(j>=6) {
//					 js.executeScript("window.scrollBy(0,350)", "");
					//Using Action class for drag and drop.		
				        Actions act=new Actions(driver);					
				        WebElement From=driver.findElement(By.xpath("(//*[contains(@id,'jqxScrollThumbverticalScrollBarjqxWidget')])[2]"));
				        
//				      //Get width of element.
//				        int ImageWidth = From.getSize().getWidth();
//				        System.out.println("Image width Is "+ImageWidth+" pixels");
//				        
//				        //Get height of element.
//				        int ImageHeight = From.getSize().getHeight();        
//				        System.out.println("Image height Is "+ImageHeight+" pixels");
				        
				        //Drag and Drop by Pixel.		
				        act.dragAndDropBy(From,135, 10).build().perform();
				        Thread.sleep(1000);
				}
				
				if(j<=10) {
					String cellValue=allCells.get(j).getText();	
					System.out.print("| "+cellValue+" |");
				}
				
			}			
		}
  }
}
