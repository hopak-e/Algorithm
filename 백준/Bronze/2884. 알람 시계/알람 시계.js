const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

b -= 45;

if(b<0){
    a -= 1;
    b += 60;

    if(a === -1){
        a = 23;
    }
}
 console.log(a+' '+b);