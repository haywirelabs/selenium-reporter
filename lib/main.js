//main.js

/*
Main
*/

(function(){

  var assert = require('assert');
  var fs = require('graceful-fs')
  var webdriver = require('selenium-webdriver');
  var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
  var test = require('selenium-webdriver/testing');
  var pathToSeleniumJar = 'server/selenium-server-standalone-2.41.0.jar';

  var server = new SeleniumServer(pathToSeleniumJar, {
    port: 4444
  });

  server.start();

  test.describe('Google Search', function() {
    var driver;

    test.before(function() {
      driver = new webdriver.Builder().
          withCapabilities(webdriver.Capabilities.chrome()).
          build();
    });

    test.it('should append query to title', function() {
      driver.get('http://www.google.com');
      driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
      driver.findElement(webdriver.By.name('btnG')).click();
      driver.wait(function() {
        return driver.getTitle().then(function(title) {
          return 'webdriver - Google Searcho' === title;
        });
      }, 1000);
    });

    test.after(function() { driver.quit(); });
  });

  console.log('selenium-reporter');
}).call(this);