//main.js

//Run ZAP Security Scanner and export report
var util = require('util'),
    exec = require('child_process').exec,
    homepageUrl = ' -cmd -quickurl http://localhost:8000',
    zapOutput = ' -quickout /Users/josborne/code/selenium-reporter/output/zapOutput.xml',
    zapShCmd = 'sh server/zap/ZAP_2.3.0.1/zap.sh' + homepageUrl + zapOutput,
    child;

child = exec(zapShCmd, function(error, stdout, stderr){
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null){
    console.log('exec error: ' + error);
  }
});

/*
Main
*/

(function(){

  //include test/test.js
  //require("../test/test.js");

  require("fs").readdirSync("./test").forEach(function(file) {
    require("../test/" + file);
  });

  console.log('selenium-reporter');
}).call(this);