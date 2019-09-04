$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:test2/login.feature");
formatter.feature({
  "name": "login test",
  "description": "  login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "succesful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"\u003cusername\u003e\" id",
  "keyword": "When "
});
formatter.step({
  "name": "password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test",
        "123"
      ]
    },
    {
      "cells": [
        "sam",
        "7645"
      ]
    }
  ]
});
formatter.scenario({
  "name": "succesful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"test\" id",
  "keyword": "When "
});
formatter.match({
  "location": "test3.i_enter_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "test3.password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "succesful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"sam\" id",
  "keyword": "When "
});
formatter.match({
  "location": "test3.i_enter_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password \"7645\"",
  "keyword": "And "
});
formatter.match({
  "location": "test3.password(String)"
});
formatter.result({
  "status": "passed"
});
});