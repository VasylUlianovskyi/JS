const TRY_LIMIT = 3;

const PASSWORD_PATTERN = "qwerty";

let currentTry = 1;

let password = "";

let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt("Input password:") === PASSWORD_PATTERN;
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

console.log(`Password is ${isPasswordCorrect ? "correct" : "incorrect"}`);

const greeting = "Hello";
const name = "Test";

const resultString = `${greeting}, ${name}!`;
console.log(resultString);

const a = 1;
const b = 2;
const sum = a + b;

console.log(`${a} + ${b} = ${sum}`);
