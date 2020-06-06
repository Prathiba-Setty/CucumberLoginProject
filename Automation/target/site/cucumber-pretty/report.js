$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful login with valid credintials",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He can visit practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "A message is displayed.",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "application-login;successful-login-with-valid-credintials;;1"
    },
    {
      "cells": [
        "\"test@email.com\"",
        "\"abcabc\""
      ],
      "line": 12,
      "id": "application-login;successful-login-with-valid-credintials;;2"
    },
    {
      "cells": [
        "\"test1@email.com\"",
        "\"abcabc\""
      ],
      "line": 13,
      "id": "application-login;successful-login-with-valid-credintials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login with valid credintials",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username \"test@email.com\" and password \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He can visit practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "A message is displayed.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCucumbertest.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 21252305400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 22
    },
    {
      "val": "abcabc",
      "offset": 52
    }
  ],
  "location": "LoginCucumbertest.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10021145800,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.clicks_Go_button()"
});
formatter.result({
  "duration": 9674571900,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.he_can_visit_practice_page()"
});
formatter.result({
  "duration": 363431000,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.a_message_is_displayed()"
});
formatter.result({
  "duration": 308500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful login with valid credintials",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username \"test1@email.com\" and password \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He can visit practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "A message is displayed.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCucumbertest.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 18544740900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@email.com",
      "offset": 22
    },
    {
      "val": "abcabc",
      "offset": 53
    }
  ],
  "location": "LoginCucumbertest.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10013835000,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.clicks_Go_button()"
});
formatter.result({
  "duration": 7718627500,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.he_can_visit_practice_page()"
});
formatter.result({
  "duration": 100303700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027VIKRAM-DELL-NEW\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Vikram\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:52332}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dadcb4b7e3c6fbcd88d6684a4df0944c\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/pages/practice\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.LoginCucumbertest.he_can_visit_practice_page(LoginCucumbertest.java:78)\r\n\tat ✽.Then He can visit practice page(Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginCucumbertest.a_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful login with valid credintials",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He can visit practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "A message is displayed.",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "application-login;successful-login-with-valid-credintials;;1"
    },
    {
      "cells": [
        "\"test@email.com\"",
        "\"abcabc\""
      ],
      "line": 12,
      "id": "application-login;successful-login-with-valid-credintials;;2"
    },
    {
      "cells": [
        "\"test1@email.com\"",
        "\"abcabc\""
      ],
      "line": 13,
      "id": "application-login;successful-login-with-valid-credintials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login with valid credintials",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username \"test@email.com\" and password \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He can visit practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "A message is displayed.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCucumbertest.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 18983587900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 22
    },
    {
      "val": "abcabc",
      "offset": 52
    }
  ],
  "location": "LoginCucumbertest.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10962195300,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.clicks_Go_button()"
});
formatter.result({
  "duration": 9959676000,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.he_can_visit_practice_page()"
});
formatter.result({
  "duration": 375898500,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.a_message_is_displayed()"
});
formatter.result({
  "duration": 253100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful login with valid credintials",
  "description": "",
  "id": "application-login;successful-login-with-valid-credintials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username \"test1@email.com\" and password \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "He can visit practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "A message is displayed.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCucumbertest.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 19861153500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@email.com",
      "offset": 22
    },
    {
      "val": "abcabc",
      "offset": 53
    }
  ],
  "location": "LoginCucumbertest.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 9870006500,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.clicks_Go_button()"
});
formatter.result({
  "duration": 6855413000,
  "status": "passed"
});
formatter.match({
  "location": "LoginCucumbertest.he_can_visit_practice_page()"
});
formatter.result({
  "duration": 93898000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027VIKRAM-DELL-NEW\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Vikram\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:52597}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0f7d70ea8018e61ef64eb3ea97d37f93\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/pages/practice\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.LoginCucumbertest.he_can_visit_practice_page(LoginCucumbertest.java:78)\r\n\tat ✽.Then He can visit practice page(Login2.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginCucumbertest.a_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
});