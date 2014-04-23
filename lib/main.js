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

  //include test/test.js

  console.log('selenium-reporter');
}).call(this);