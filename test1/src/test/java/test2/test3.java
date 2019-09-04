package test2;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class test3 {

	@When("I enter user {string} id")
	public void i_enter_user_id(String x) {
		System.out.println("\t user id \b"+x);
	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
	}

	@And("password {string}")
	public void password(String y) {
		System.out.println("\t password entered \b"+y);
	    // Write code here that turns the phrase above into concrete actions
	}

	/*@And("click login")
	public void click_login() {
		System.out.println("login clicked");
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("homepage displayed")
	public void homepage_displayed() {
		System.out.println("homepage displayed");
	    // Write code here that turns the phrase above into concrete actions
	}

	@And("status is known")
	public void status_is_known() {
		System.out.println("status known");
	    // Write code here that turns the phrase above into concrete actions*/
	//}
	/*@When("wrong password")
	public void wrong_password() {
		System.out.println("wrong password");
	}

	@Then("status is failed")
	public void status_is_failed() {
		System.out.println("status failed");
	}*/



}


