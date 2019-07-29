package com.sel.cucumber;

import java.util.List;
import java.util.Map;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Twodimen {
	static WebDriver driver; 
	@Given("Go to telecom homepage")
	public void go_to_telecom_homepage() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Selenium\\Softwares\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();

		
	}

	@When("need to fill all details")
	public void need_to_fill_all_details(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> add= dataTable.asMaps(String.class, String.class);
		driver.findElement(By.name("rental")).sendKeys(add.get(1).get("monRen"));
		driver.findElement(By.id("local_minutes")).sendKeys(add.get(2).get("LocMin"));
		driver.findElement(By.id("inter_minutes")).sendKeys(add.get(2).get("intMin"));
		driver.findElement(By.id("sms_pack")).sendKeys(add.get(1).get("freesms"));
		driver.findElement(By.id("minutes_charges")).sendKeys(add.get(2).get("loc charge"));
		driver.findElement(By.id("inter_charges")).sendKeys(add.get(2).get("intcharge"));
		driver.findElement(By.id("sms_charges")).sendKeys(add.get(1).get("smscharge"));
		driver.findElement(By.xpath("//input[@name='submit']")).click();   
	}

	@Then("I validate the outcomes entered successfully")
	public void i_validate_the_outcomes_entered_successfully() {
		Assert.assertTrue(driver.findElement(
				By.xpath("//h2[text()='Congratulation you add Tariff Plan']"))
				.isDisplayed());
	}

//	@Then("go back to homepage")
//	public void go_back_to_homepage() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("Add all the tarriff details in fields{string},{string},{string},{string},{string},{string},{string}")
//	public void add_all_the_tarriff_details_in_fields(String string, String string2, String string3, String string4, String string5, String string6, String string7) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Then("Validate whether the tarriff details entered successfully")
//	public void validate_whether_the_tarriff_details_entered_successfully() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}

	@Then("go back to home page")
	public void go_back_to_home_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


}
