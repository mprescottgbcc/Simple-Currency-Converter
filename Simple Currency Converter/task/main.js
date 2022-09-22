input = require('sync-input');
let welcome;
let choice;
let from;
let to;
let amount;
let result;

const currencies = new Map([
    ['USD', 1],
    ['JPY', 113.5],
    ['EUR', 0.89],
    ['RUB', 74.36],
    ['GBP', 0.75]
]);

const convertToUSD = (amount, from) => amount / currencies.get(from);
const convertFromUSD = (amount, to) => amount * currencies.get(to);

welcome = "Welcome to Currency Converter!";
currencies.forEach(function(value, key) {
    welcome += `\n1 USD equals ${currencies.get(key)} ${key}`;
});

console.log(welcome);

do {
    console.log("What do you want to do?");
    choice = Number(input("1-Convert currencies 2-Exit program\n"));

    if (choice === 2) {
        break;
    }

    if (choice !== 1) {
        console.log("Unknown input");
        continue;
    }

    console.log("What do you want to convert?");
    from = input("From: ").toUpperCase();
    if (currencies.get(from) === undefined) {
        console.log("Unknown currency");
        continue;
    }

    to = input("To: ").toUpperCase();
    if (currencies.get(to) === undefined) {
        console.log("Unknown currency");
        continue;
    }

    amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        continue;
    }

    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        continue;
    }

    result = convertFromUSD(convertToUSD(amount, from), to).toFixed(4);
    console.log(`Result: ${amount} ${from} equals ${result} ${to}`);
} while (true);

console.log("Have a nice day!");
