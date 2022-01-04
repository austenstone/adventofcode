const fs = require('fs')

data = fs.readFileSync('input.txt', 'utf8');
data = data.split('\n');

let x = 0, y = 0, aim = 0;
data.forEach((el, i) => {
    const parts = el.split(' ');
    const units = +parts[1];
    switch (parts[0]) {
        case 'forward':
            x += units;
            y += (aim * units);
            break;
        case 'up':
            aim -= units;
            break;
        case 'down':
            aim += units;
            break;
    }
})

console.log(`${x}(horizontal position) * ${y}(depth) = ${x * y}`);