selenium-reporter
=================

Node.js application to run Selenium tests via the selenium-standalone jar and report in XML for consumption in JUnit

Usage
-----
Run basic mocha tests
``` mocha bin/selenium-reporter.js ```

Run mocha tests with mocha-bamboo-reporter
``` npm run-script bamboo ```
*running this will produce a mocha.json file containing the unit test results*