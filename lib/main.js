//main.js
var util = require('util');
var spawn = require('child_process').spawn;
//var pathToZapJar = 'server/zap/ZAP_2.3.0.1/zap.jar';
var homepageUrl = 'http://localhost:8000';
var zapOutput = 'output/zapOutput.xml';
var zapShCmd = 'server/zap/ZAP_2.3.0.1/zap.sh';
var zapSpawn = spawn(zapShCmd, ['-quickurl',homepageUrl, '-quickout', zapOutput]);

zapSpawn.stdout.on('data', function(data){
  console.log('stdout: ' + data);
});

zapSpawn.stderr.on('data', function(data){
  console.log('stderr: ' + data);
});

zapSpawn.on('exit', function(code){
  console.log('child process exited with code ' + code);
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