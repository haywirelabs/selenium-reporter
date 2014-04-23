//main.js

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