const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = input[0];

for(let i = 1; i<=n; i++){
    const all = input[i].split(" ");
    const floor = all[0];
    const length = all[1];
    const people = all[2];
    
    let firstnumber = people % floor;
    firstnumber = firstnumber === 0 ? floor : firstnumber;

    let lastnumber = Math.ceil(people / floor);
    lastnumber = lastnumber < 10 ? "0" + lastnumber : lastnumber;

    console.log(`${firstnumber}${lastnumber}`);
}