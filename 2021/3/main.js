const fs = require('fs')

data = fs.readFileSync('input.txt', 'utf8');
data = data.split('\n');

let numbers = new Array(data[0].length).fill(1).map(() => []);
data.forEach((line, i) => line.split('').forEach((char, j) => numbers[j].push(char)))

console.log(numbers);

let gammaRate = '';
let epsilonRate = '';
numbers.forEach((num) => {
    const zeros = num.filter(x => x === '0').length;
    const ones = num.filter(x => x === '1').length;

    gammaRate += ones > zeros ? '1' : '0'
    epsilonRate += ones < zeros ? '1' : '0'
    gr = parseInt(gammaRate, 2);
    er = parseInt(epsilonRate, 2);
    pr = er * gr;
    console.log(`zeros: ${zeros}, ones ${ones}, ${gr}(gammaRate) * ${er}(epsilonRate) = ${pr}`);
})

