package stepDefinations;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginCucumbertest {
	public static WebDriver driver;
	
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "F:\\Softwares\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
		String baseURL = "https://learn.letskodeit.com/";
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);	
		driver.get(baseURL);
		System.out.println("User is on home page");
		Thread.sleep(8000);
	}

	    @When("^User enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_enters_username_and_password(String username, String password) throws Throwable{
		System.out.println("hi");
	    driver.findElement(By.xpath("//a[@href='/sign_in']")).click();
		//loginLink.click();
		System.out.println("Click logon link");
		WebElement emailField = driver.findElement(By.xpath("//input[@type='email']"));
		emailField.sendKeys(username);
		System.out.println("Enter email address");
		WebElement passwordField = driver.findElement(By.xpath("//input[@type='password']"));
		passwordField.sendKeys(password);
		System.out.println("Enter password");
		Thread.sleep(2000);
	}

	@And("^Clicks Go button$")
	public void clicks_Go_button() throws InterruptedException {
		WebElement goButton = driver.findElement(By.xpath("//input[@value='Log In']"));
		goButton.click();
		System.out.println("Click logon button");
		Thread.sleep(3000);
		//String text = driver.findElement(By.xpath("//div[@class='alert alert-danger'][contains(.,'Invalid email or password.')]")).getText();
		//boolean text;
		String url = driver.getCurrentUrl();
		System.out.println("Url is :"+url);
		if(url.equalsIgnoreCase("https://letskodeit.teachable.com/"))
		{
			System.out.println("Valid credintials");
		}else
		{
			System.out.println("invalid credinatials");
			
		}
		
		/*if(driver.findElement(By.xpath("//div[@class='alert alert-danger'][contains(.,'Invalid email or password.')]")).isDisplayed()) {
				//if (text.contains("Invalid email or password.")) {
		            System.out.println("Invalid credintials");
		            driver.close();
		        } else {
		        	System.out.println("Valid credintials");
		        }*/
		        	
		        
	}
	
	@Then("^He can visit practice page$")
	public void he_can_visit_practice_page() {
		WebElement practicePage = driver.findElement(By.xpath("//a[@href='/pages/practice']"));
		practicePage.click();
		System.out.println("Click practice link");
	}

	@Then("^A message is displayed\\.$")
	public void a_message_is_displayed() {
		System.out.println("Login Successful");
	}


}
