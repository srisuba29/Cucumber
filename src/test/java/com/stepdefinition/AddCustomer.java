package com.stepdefinition;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomer {
	static WebDriver driver;
	
	@Given("user is in the homepage of site")
	public void user_is_in_the_homepage_of_site() {
System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\Softwares\\chromedriver_win32\\chromedriver.exe");
driver=new ChromeDriver();
driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("user click on the add button")
	public void user_click_on_the_add_button()throws InterruptedException {
	    WebElement cli=driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]"));
cli.click();
Thread.sleep(3000);

	}

	@When("user will enter the details")
	public void user_will_enter_the_details() {
driver.findElement(By.xpath("//label[text()='Done']")).click();
driver.findElement(By.id("fname")).sendKeys("Subasri");
driver.findElement(By.id("lname")).sendKeys("S");
driver.findElement(By.id("email")).sendKeys("srisuba29@gmail.com");
driver.findElement(By.name("addr")).sendKeys("Villupuram");
driver.findElement(By.id("telephoneno")).sendKeys("9876543210");

	}

	@When("user will click on the submit button")
	public void user_will_click_on_the_submit_button() {
	    driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@Then("user will validate whether customer id is generated")
	public void user_will_validate_whether_customer_id_is_generated() {
	   Assert.assertTrue(driver.findElement(By.xpath("//td[@align='center']))[2]")).isDisplayed());
	}}


