$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/US1908716_SecurityRoleforClinicalSetupUI.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:Hema"
    }
  ],
  "line": 3,
  "name": "Security Roles for Clinical Setup UI",
  "description": "",
  "id": "security-roles-for-clinical-setup-ui",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@System"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@US1908716"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "security roles doesn\u0027t set up for the Non Prod Environments of the Clinical Setup UI",
  "description": "",
  "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User with no access to \u003csecure_groups\u003e navigates to MAPS Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Clinical link under Plan Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clinical Setup link will be disabled",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui;",
  "rows": [
    {
      "cells": [
        "secure_groups",
        "Screen_Status"
      ],
      "line": 13,
      "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui;;1"
    },
    {
      "cells": [
        "MAPS_WEB_Clinical_Edit_NonProd",
        "\"Clinical setup Disabled\""
      ],
      "line": 14,
      "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui;;2"
    },
    {
      "cells": [
        "MAPS_WEB_Clinical_View_NonProd",
        "\"Clinical setup Disabled\""
      ],
      "line": 15,
      "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16276691100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "security roles doesn\u0027t set up for the Non Prod Environments of the Clinical Setup UI",
  "description": "",
  "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@US1908716"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@System"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User with no access to MAPS_WEB_Clinical_Edit_NonProd navigates to MAPS Web Application",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Clinical link under Plan Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clinical Setup link will be disabled",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPS_WEB_Clinical_Edit_NonProd",
      "offset": 23
    }
  ],
  "location": "Step_SecurityRoleforClinicalSetupUI.User_with_no_access_to_secure_groups_navigates_to_MAPS_Web_Application()"
});
formatter.result({
  "duration": 398366800,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefinitions.Step_SecurityRoleforClinicalSetupUI.User_with_no_access_to_secure_groups_navigates_to_MAPS_Web_Application() in file:/C:/Users/hn1001/workspace/NSF_UI/target/test-classes/\u0027 with pattern [^User with no access to (.*) navigates to MAPS Web Application$] is declared with 0 parameters. However, the gherkin step has 1 arguments [MAPS_WEB_Clinical_Edit_NonProd]. \nStep: Given User with no access to MAPS_WEB_Clinical_Edit_NonProd navigates to MAPS Web Application\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_SecurityRoleforClinicalSetupUI.user_clicks_on_Clinical_link_under_Plan_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_SecurityRoleforClinicalSetupUI.Clinical_Setup_link_will_be_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4187519600,
  "status": "passed"
});
formatter.before({
  "duration": 19339880300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "security roles doesn\u0027t set up for the Non Prod Environments of the Clinical Setup UI",
  "description": "",
  "id": "security-roles-for-clinical-setup-ui;security-roles-doesn\u0027t-set-up-for-the-non-prod-environments-of-the-clinical-setup-ui;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@US1908716"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@System"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User with no access to MAPS_WEB_Clinical_View_NonProd navigates to MAPS Web Application",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Clinical link under Plan Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clinical Setup link will be disabled",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPS_WEB_Clinical_View_NonProd",
      "offset": 23
    }
  ],
  "location": "Step_SecurityRoleforClinicalSetupUI.User_with_no_access_to_secure_groups_navigates_to_MAPS_Web_Application()"
});
formatter.result({
  "duration": 656900,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefinitions.Step_SecurityRoleforClinicalSetupUI.User_with_no_access_to_secure_groups_navigates_to_MAPS_Web_Application() in file:/C:/Users/hn1001/workspace/NSF_UI/target/test-classes/\u0027 with pattern [^User with no access to (.*) navigates to MAPS Web Application$] is declared with 0 parameters. However, the gherkin step has 1 arguments [MAPS_WEB_Clinical_View_NonProd]. \nStep: Given User with no access to MAPS_WEB_Clinical_View_NonProd navigates to MAPS Web Application\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_SecurityRoleforClinicalSetupUI.user_clicks_on_Clinical_link_under_Plan_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_SecurityRoleforClinicalSetupUI.Clinical_Setup_link_will_be_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3695042900,
  "status": "passed"
});
});