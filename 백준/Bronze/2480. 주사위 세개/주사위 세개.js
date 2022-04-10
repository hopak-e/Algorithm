const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if(a==b && a==c){
    console.log(10000+a*1000);
}else if(a!==b && a!==c && b==c){
    console.log(1000+b*100);
}else if(a!==b && b!==c && a==c){
    console.log(1000+a*100);
}else if(a==b && a!==c && b!==c){
    console.log(1000+a*100);
}else{
    console.log(Math.max(a,b,c)*100);
}
