package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//package name of features
		features = { "src/test/java/features"},
		// package name step definations
		glue= {"stepDefinations"},
		//for parallel execution
	 plugin = {"pretty", "html:target/site/cucumber-pretty" , "json:target/cucumber.json"})

public class TestRunner {

}
