package test2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(monochrome=true,plugin={"pretty","json:somename.json"})
public class testcase1
{
}
