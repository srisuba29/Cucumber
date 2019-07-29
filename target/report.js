$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Customer1.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Tarriff test validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Go to telecom web page",
  "keyword": "Given "
});
formatter.match({
  "location": "Tarriff.go_to_telecom_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the add tariff button",
  "keyword": "And "
});
formatter.match({
  "location": "Tarriff.click_the_add_tariff_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the tariff fields",
  "rows": [
    {
      "cells": [
        "2500",
        "60",
        "80",
        "100",
        "30",
        "300",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Tarriff.enter_the_tariff_fields(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate tarriff",
  "keyword": "Then "
});
formatter.match({
  "location": "Tarriff.i_validate_tarriff()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Customer2.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user in telecom page",
  "keyword": "Given "
});
formatter.step({
  "name": "used to click add terriff button",
  "keyword": "And "
});
formatter.step({
  "name": "need to fill all details\"\u003cmonRen\u003e\",\"\u003cfreeLoc\u003e\",\"\u003cfreeInt\u003e\",\"\u003cfreesms\u003e\",\"\u003clpmc\u003e\",\"\u003cipmc\u003e\",\"\u003cspc\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click submit button",
  "keyword": "And "
});
formatter.step({
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the successfully compilation page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "monRen",
        "freeLoc",
        "freeInt",
        "freesms",
        "lpmc",
        "ipmc",
        "spc"
      ]
    },
    {
      "cells": [
        "600",
        "5",
        "89",
        "10",
        "100",
        "10",
        "8"
      ]
    },
    {
      "cells": [
        "800",
        "7",
        "76",
        "67",
        "50",
        "5",
        "10"
      ]
    },
    {
      "cells": [
        "700",
        "30",
        "65",
        "87",
        "40",
        "8",
        "60"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber2.user_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "used to click add terriff button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.used_to_click_add_terriff_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "need to fill all details\"600\",\"5\",\"89\",\"10\",\"100\",\"10\",\"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber2.need_to_fill_all_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yet another action",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should see the successfully compilation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber2.user_should_see_the_successfully_compilation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber2.user_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "used to click add terriff button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.used_to_click_add_terriff_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "need to fill all details\"800\",\"7\",\"76\",\"67\",\"50\",\"5\",\"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber2.need_to_fill_all_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yet another action",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should see the successfully compilation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber2.user_should_see_the_successfully_compilation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber2.user_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "used to click add terriff button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.used_to_click_add_terriff_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "need to fill all details\"700\",\"30\",\"65\",\"87\",\"40\",\"8\",\"60\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber2.need_to_fill_all_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yet another action",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should see the successfully compilation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber2.user_should_see_the_successfully_compilation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/Customer3.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Need to create a new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user is in the homepage of site",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on the add button",
  "keyword": "And "
});
formatter.step({
  "name": "user will enter the details",
  "keyword": "When "
});
formatter.step({
  "name": "user will click on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user will validate whether customer id is generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "addr",
        "mob"
      ]
    },
    {
      "cells": [
        "Raja",
        "S",
        "raja@gmail.com",
        "Pondy",
        "987653321"
      ]
    },
    {
      "cells": [
        "Rani",
        "R",
        "rani@gmail.com",
        "Cuddalore",
        "9865324567"
      ]
    },
    {
      "cells": [
        "Uma",
        "T",
        "Uma@gmail.com",
        "trichy",
        "9876543109"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Need to create a new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user is in the homepage of site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_is_in_the_homepage_of_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the add button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_the_add_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53571}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: e943eff230cfe0632d59bbf50701a9b2\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.AddCustomer.user_click_on_the_add_button(AddCustomer.java:26)\r\n\tat ✽.user click on the add button(src/test/resources/features/Customer3.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will enter the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_will_enter_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_will_click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will validate whether customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_will_validate_whether_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Need to create a new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user is in the homepage of site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_is_in_the_homepage_of_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the add button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_the_add_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53601}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: d8316e69e0c40fdc0e864b32fc80ab07\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.AddCustomer.user_click_on_the_add_button(AddCustomer.java:26)\r\n\tat ✽.user click on the add button(src/test/resources/features/Customer3.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will enter the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_will_enter_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_will_click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will validate whether customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_will_validate_whether_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Need to create a new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user is in the homepage of site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_is_in_the_homepage_of_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the add button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_the_add_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53620}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: a95d6009d4a2890d3a7f59e37b8d5477\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.AddCustomer.user_click_on_the_add_button(AddCustomer.java:26)\r\n\tat ✽.user click on the add button(src/test/resources/features/Customer3.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will enter the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_will_enter_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_will_click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will validate whether customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_will_validate_whether_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/Twodimap.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Tariff details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Go to telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodimen.go_to_telecom_homepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53640}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: c8772363220c0c9f47bbb81a2b82b864\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.Twodimen.go_to_telecom_homepage(Twodimen.java:25)\r\n\tat ✽.Go to telecom homepage(src/test/resources/features/Twodimap.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "used to click add terriff button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber2.used_to_click_add_terriff_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "need to fill all details",
  "rows": [
    {
      "cells": [
        "monRen",
        "freeLoc",
        "freeInt",
        "freesms",
        "lpmc",
        "ipmc",
        "spc"
      ]
    },
    {
      "cells": [
        "600",
        "5",
        "89",
        "10",
        "100",
        "10",
        "8"
      ]
    },
    {
      "cells": [
        "800",
        "7",
        "76",
        "67",
        "50",
        "5",
        "10"
      ]
    },
    {
      "cells": [
        "700",
        "30",
        "65",
        "87",
        "40",
        "8",
        "60"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodimen.need_to_fill_all_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the outcomes entered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodimen.i_validate_the_outcomes_entered_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go back to homepage",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Entered all Tariff details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Go to telecom homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Add all the tarriff details in fields\"\u003cmonRen\u003e\",\"\u003cfreeLoc\u003e\",\"\u003cfreeInt\u003e\",\"\u003cfreesms\u003e\",\"\u003clpmc\u003e\",\"\u003cipmc\u003e\",\"\u003cspc\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate whether the tarriff details entered successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "go back to home page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "monRen",
        "freeLoc",
        "freeInt",
        "freesms",
        "lpmc",
        "ipmc",
        "spc"
      ]
    },
    {
      "cells": [
        "5000",
        "7",
        "67",
        "100",
        "1000",
        "1",
        "8"
      ]
    },
    {
      "cells": [
        "7000",
        "10",
        "100",
        "607",
        "500",
        "15",
        "10"
      ]
    },
    {
      "cells": [
        "8700",
        "370",
        "150",
        "870",
        "410",
        "80",
        "60"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Entered all Tariff details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Go to telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodimen.go_to_telecom_homepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53659}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 12e12e66244097ef90cc2426d73ca2ef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.Twodimen.go_to_telecom_homepage(Twodimen.java:25)\r\n\tat ✽.Go to telecom homepage(src/test/resources/features/Twodimap.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add all the tarriff details in fields\"5000\",\"7\",\"67\",\"100\",\"1000\",\"1\",\"8\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate whether the tarriff details entered successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "go back to home page",
  "keyword": "And "
});
formatter.match({
  "location": "Twodimen.go_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Entered all Tariff details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Go to telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodimen.go_to_telecom_homepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53680}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 0c5b95531fda5ade53a5d274fc72f012\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.Twodimen.go_to_telecom_homepage(Twodimen.java:25)\r\n\tat ✽.Go to telecom homepage(src/test/resources/features/Twodimap.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add all the tarriff details in fields\"7000\",\"10\",\"100\",\"607\",\"500\",\"15\",\"10\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate whether the tarriff details entered successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "go back to home page",
  "keyword": "And "
});
formatter.match({
  "location": "Twodimen.go_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Entered all Tariff details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Go to telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodimen.go_to_telecom_homepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53701}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: ddd39da333abae94203f3c90d7e0cbf0\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.Twodimen.go_to_telecom_homepage(Twodimen.java:25)\r\n\tat ✽.Go to telecom homepage(src/test/resources/features/Twodimap.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add all the tarriff details in fields\"8700\",\"370\",\"150\",\"870\",\"410\",\"80\",\"60\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate whether the tarriff details entered successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "go back to home page",
  "keyword": "And "
});
formatter.match({
  "location": "Twodimen.go_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/customer.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Need to create a new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user is in the homepage of site",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_is_in_the_homepage_of_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the add button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_the_add_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-LFMA110\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53722}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: a88ccaf60f7397e97bb0ed3ecce9b91a\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.stepdefinition.AddCustomer.user_click_on_the_add_button(AddCustomer.java:26)\r\n\tat ✽.user click on the add button(src/test/resources/features/customer.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will enter the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_will_enter_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_will_click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will validate whether customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_will_validate_whether_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
});