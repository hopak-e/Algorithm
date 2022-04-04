const { S_IFCHR } = require('constants');
const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

var N = input[0]*1; 

function canDiv(N,div){
    if (N%div == 0) return true;
    else return false;
}

for (var i =2; i<=N; i++){
    if(N == 1) return true;
    while(true){
        if(canDiv(N,i)){
            console.log(i);
            N = N / i;          
        }else break;
    }
}