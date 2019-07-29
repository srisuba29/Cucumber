package com.stepdefinition;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cucumber2 {
	
	static WebDriver driver;

	@Given("user in telecom page")
	public void user_in_telecom_page() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Selenium\\Softwares\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
	}

	@Given("used to click add terriff button")
	public void used_to_click_add_terriff_button() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("need to fill all details{string},{string},{string},{string},{string},{string},{string}")
	public void need_to_fill_all_details(String A, String B, String C, String D, String E, String F, String G) {
		driver.findElement(By.name("rental")).sendKeys(A);
		driver.findElement(By.id("local_minutes")).sendKeys(B);
		driver.findElement(By.id("inter_minutes")).sendKeys(C);
		driver.findElement(By.id("sms_pack")).sendKeys(D);
		driver.findElement(By.id("minutes_charges")).sendKeys(E);
		driver.findElement(By.id("inter_charges")).sendKeys(F);
		driver.findElement(By.id("sms_charges")).sendKeys(G);
	}

	@When("click submit button")
	public void click_submit_button() {
		driver.findElement(By.xpath("//input[@name='submit']")).click();

	}

	
	@Then("user should see the successfully compilation page")
	public void user_should_see_the_successfully_compilation_page() {
		Assert.assertTrue(driver.findElement(
				By.xpath("//h2[text()='Congratulation you add Tariff Plan']"))
				.isDisplayed());
	}


	
	
	
}
