selenium-reporter
=================

Node.js application to run Selenium tests via the selenium-standalone jar and report in XML for consumption in JUnit

Usage
-----
Run basic mocha tests

``` node node_modules/mocha/bin/mocha bin/selenium-reporter.js --location http://localhost:8000 -R mocha-bamboo-reporter ```

*running this will produce a mocha.json file containing the unit test results*

Installation Note
-----------------
ZAP requires a minimum of Java 7 to run