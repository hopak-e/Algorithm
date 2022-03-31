const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function solution(input){
    for (let alphabet of croatian) {
        input = input.split(alphabet).join('a');
    }
    return input.length;
}

console.log(solution(input));