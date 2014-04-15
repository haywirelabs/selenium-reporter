//main.js

/*
Main
*/

(function(){

  var webdriver = require('selenium-webdriver');
      SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
  var pathToSeleniumJar = 'server/selenium-server-standalone-2.41.0.jar';

  var server = new SeleniumServer(pathToSeleniumJar, {
    port: 4444
  })

  server.start();

  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

  /*
  driver.get('http://www.google.com');
  driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
  driver.findElement(webdriver.By.name('btnG')).click();
  driver.wait(function(){
    return driver.getTitle().then(function(title){
      return title === 'webdriver - Google Search';
    });
  }, 1000);
  */
  driver.quit();
  server.stop();

  console.log('selenium-reporter');
}).call(this);