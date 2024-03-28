let num = 5
console.log(num)
    num = 7
console.log(num)

const readline = require('readline');

process.stdout.write('Please enter your name: ');

process.stdin.on('data', (data) => {
    const userInput = data.toString().trim();
    console.log('Hello, ' + userInput + '!');
    process.exit();
});



