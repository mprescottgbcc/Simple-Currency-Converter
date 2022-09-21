input = require('sync-input');

const currencies = new Map([
    ['USD', 1],
    ['JPY', 113.5],
    ['EUR', 0.89],
    ['RUB', 74.36],
    ['GBP', 0.75]
]);

const convertToUSD = (amount, from) => amount / currencies.get(from);
const convertFromUSD = (amount, to) => amount * currencies.get(to);

let welcome = "Welcome to Currency Converter!";
currencies.forEach(function(value, key) {
    welcome += `\n1 USD equals ${currencies.get(key)} ${key}`;
});

console.log(welcome);
console.log("What do you want to convert?");

let from = input("From: ").toUpperCase();
if (currencies.get(from) === undefined) {
    console.log("Unknown currency");
    return;
}

let to = input("To: ").toUpperCase();
if (currencies.get(to) === undefined) {
    console.log("Unknown currency");
    return;
}

let amount = Number(input("Amount: "));
if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return;
}

if (amount < 1) {
    console.log("The amount cannot be less than 1");
    return;
}

let result = convertFromUSD(convertToUSD(amount, from), to).toFixed(4);
console.log(`Result: ${amount} ${from} equals ${result} ${to}`);
