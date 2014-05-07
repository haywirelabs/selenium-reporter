var assert = require('assert');
var fs = require('graceful-fs')
var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var test = require('selenium-webdriver/testing');
var pathToSeleniumJar = 'server/selenium-server-standalone-2.41.0.jar';
var homepageUrl = 'https://dev.healthcare.gov/?ACA=9xCVchyHgWzc';
var pathToZapJar = 'server/zap/ZAP_2.3.0.1/zap.jar';
var pathToZapSh = 'server/zap/ZAP_2.3.0.1/zap.sh';

var server = new SeleniumServer(pathToSeleniumJar, {
  port: 4444
});

server.start();

test.describe('Healthcare Test', function() {
  var driver;

  test.before(function() {
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
  });

  test.it('should have the proper healthcare title on the home page', function() {
    driver.get(homepageUrl);
    driver.wait(function() {
      return driver.getTitle().then(function(title) {
        return 'Health Insurance Marketplace, Affordable Care Act | HealthCare.gov' === title;
      });
    }, 3000);
  });


  test.after(function() { driver.quit(); });
});