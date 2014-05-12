//main.js

/*
Main
*/

(function(){

  require("fs").readdirSync("./test").forEach(function(file) {
    require("../test/" + file);
  });

  console.log('selenium-reporter');
}).call(this);