var fs = require('fs');
var inputdata = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(inputdata[0]);
var b = parseInt(inputdata[1]);
console.log(a+b);