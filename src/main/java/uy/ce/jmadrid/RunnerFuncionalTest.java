package uy.ce.jmadrid;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/resources/",
        plugin = { "pretty","html:target/report-html", "json:target/report.json" },
        glue = "uy.ce.jmadrid",
        monochrome = true,
        snippets = SnippetType.UNDERSCORE,
        tags = {
                "@funcionales" },
        dryRun = false,
        strict = false)


public class RunnerFuncionalTest {

}
