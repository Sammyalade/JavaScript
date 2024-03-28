const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the weather like? ", (answer) => {
    switch (answer.trim().toLowerCase()) {
        case "rainy":
            console.log("Remember to bring an umbrella.");
            break;
        case "sunny":
            console.log("Dress lightly.");
            break;
        case "cloudy":
            console.log("Go outside.");
            break;
        default:
            console.log("Unknown weather type!");
            break;
    }
    process.exit(0);
});
