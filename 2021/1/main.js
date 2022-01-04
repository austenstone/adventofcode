const fs = require('fs')

data = fs.readFileSync('input.txt', 'utf8');
data = data.split('\n').map(el => +el);

let largerSums = 0;
let sum = 0;
let lastSum = 0;
for (let i = 0; i < data.length - 3; i += 1) {
    sum = data[i] + data[i + 1] + data[i + 2];
    if (sum > lastSum) {
        largerSums++;
    }
    lastSum = sum;
}

console.log(largerSums);