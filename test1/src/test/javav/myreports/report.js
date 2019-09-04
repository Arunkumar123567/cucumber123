$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:test2/login.feature");
formatter.feature({
  "name": "login test",
  "description": "  login",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "succesful login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter user id",
  "keyword": "When "
});
formatter.match({
  "location": "test3.i_enter_user_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password",
  "keyword": "And "
});
formatter.match({
  "location": "test3.password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "test3.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "test3.homepage_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status is known",
  "keyword": "And "
});
formatter.match({
  "location": "test3.status_is_known()"
});
formatter.result({
  "status": "passed"
});
});