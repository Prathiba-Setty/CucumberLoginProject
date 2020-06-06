package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Logintest {

	public static void main(String[] args) throws Throwable {
		// TODO Auto-generated method stub
		// WebDriver driver;
		System.setProperty("webdriver.chrome.driver", "F:\\Softwares\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		String baseURL = "https://learn.letskodeit.com/";
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(baseURL);
		System.out.println("User is on home page");
		Thread.sleep(3000);

		WebElement loginLink = driver.findElement(By.xpath("//a[contains(.,'Login')]"));
		loginLink.click();
		System.out.println("Click logon link");
		WebElement emailField = driver.findElement(By.xpath("//input[@type='email']"));
		emailField.sendKeys("test@email.com");
		System.out.println("Enter email address");
		WebElement passwordField = driver.findElement(By.xpath("//input[@type='password']"));
		passwordField.sendKeys("abcabc");
		System.out.println("Enter password");

		WebElement goButton = driver.findElement(By.xpath("//input[@value='Log In']"));
		goButton.click();
		System.out.println("Click logon button");
		Thread.sleep(3000);

		WebElement practicePage = driver.findElement(By.xpath("//a[@href='/pages/practice']"));
		practicePage.click();
		System.out.println("Click practice link");

		System.out.println("Login Successful");

	}

}
