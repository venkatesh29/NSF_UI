package fdfdfdfd;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Amazon {

	public static void main(String[] args) throws Exception {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\VENKATESH_VILLA\\Documents\\GitHub\\SP_CDOFramework\\src\\test\\resources\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		
		driver.get("https://www.amazon.in/");
		
		driver.findElement(By.xpath("//*[@id='nav-link-accountList']/span[1]//parent::a")).click();
		
		Thread.sleep(8000);
		driver.findElement(By.xpath("(//span[text()='Sign in'])[2]/parent::a")).click();
		
		driver.findElement(By.name("email")).clear();
		driver.findElement(By.name("email")).sendKeys("9821366422");
		driver.findElement(By.xpath("//input[@id='continue']")).click();
		
		driver.findElement(By.xpath("//input[@id='ap_password']")).clear();
		driver.findElement(By.xpath("//input[@id='ap_password']")).sendKeys("Amaz6730");
		
		driver.findElement(By.xpath("//input[@id='signInSubmit']")).click();
		
		driver.findElement(By.xpath("//*[@id='twotabsearchtextbox']")).sendKeys("vivo");
		driver.findElement(By.xpath("//*[@id='nav-search']/form/div[2]/div/input")).click();
		Thread.sleep(8000);
		driver.findElement(By.xpath("//span[contains(text(),'Vivo Y90 (Black, 2GB RAM, 16GB Storage) with No Cost EMI/Additional Exchange Offers')]//parent::a")).click();
		
		Set<String>allwindows=driver.getWindowHandles();
		for(String window:allwindows) {
			driver.switchTo().window(window);
			if()
		}
		
	}

}
