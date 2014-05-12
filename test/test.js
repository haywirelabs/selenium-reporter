if (process.argv[3] === "--location"){
  var target_location = process.argv[4];
}
else{
  return "Location is not defined.";
}

var assert = require('assert');
var fs = require('graceful-fs')
var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var test = require('selenium-webdriver/testing');
var pathToSeleniumJar = 'server/selenium-server-standalone-2.41.0.jar';
var homepageUrl = target_location;

var server = new SeleniumServer(pathToSeleniumJar, {
  port: 4444,
  proxyPort: 9083
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