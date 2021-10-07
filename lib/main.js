const fs = require('fs');
const { r1lr } = require('./lattice-rule.js');

fs.readFile('fib13.json', (err, data) => {
    const { z, n } = JSON.parse(data);
    const points = r1lr(z, n);
    console.log('1.', points);
});

let z = [1, 11];
let n = 31;
let points = r1lr(z, n);
console.log('2.', points);