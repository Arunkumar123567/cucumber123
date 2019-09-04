package test2;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class datatable {
	@Given("user in home page")
	public void user_in_home_page(io.cucumber.datatable.DataTable dt) {
		List<Map<String,String>> arun=dt.asMaps();
		for(int i=0;i<arun.size();i++)
		{
		System.out.println(arun.get(i).get("username"));
		System.out.println(arun.get(i).get("password"));
		}
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
	   // throw new cucumber.api.PendingException();
	}

	@And("CLick on login button")
	public void click_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	 //   throw new cucumber.api.PendingException();
	}

	@Then("Home page is displayed")
	public void home_page_is_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new cucumber.api.PendingException();
	}



}
