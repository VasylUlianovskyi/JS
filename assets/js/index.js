// 1) Створіть дві змінні a та b. Виведіть у консоль результат їх множення.

let a = 5;
let b = 7;

let sum = a * b;

console.log(sum);

// 2) Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.

const c = 15;
const d = 5;

const sum1 = c / d;

console.log(sum1);

// 3) Створіть дві змінні e та f. Виведіть у консоль результат додавання.

let e = 45;
let f = 23;

console.log(e + f);

// 4) Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в консоль

let n1 = 11;

let isNumber = true;

let string1 = "java script";

let string2 = "100";

console.log(
  "Numder:",
  n1,
  "\nisNumder:",
  isNumber,
  "\nPhrase:",
  string1,
  "\nNumber2:",
  string2
);

//5) *Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num – 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num – 1;

let num = 1;
num += 11;
console.log("Num=", num);

let num1 = 1;
num1 -= 11;
console.log("Num1=", num1);

let num3 = 1;
num3 *= 11;
console.log("Num3=", num3);

let num4 = 1;
num4 /= 11;
console.log("Num4=", num4);

let num5 = 1;
num5++;
console.log("Num5=", num5);

let num6 = 1;
num6--;
console.log("Num6=", num6);

// 1) Запитати число у користувача, піднести його до квадрату і вивести результат.

let value = Number(prompt("Input value:", "0"));

const totalValue = value ** 2;
alert(totalValue);

// 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.

let numberOne = Number(prompt("Input fisrt number:", "0"));
let numberTwo = Number(prompt("Input second number:", "0"));

const arithmeticMean = (numberOne + numberTwo) / 2;

alert(arithmeticMean);

//  3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.

let minutesValue = Number(prompt("Input amount of minutes:", "0"));

const totalSeconds = minutesValue * 60;

alert(totalSeconds);

// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію). *Додайте в розмітку отриманий рядок в елемент p.

let greeting = "Hello,";

let userName = prompt("Input user name:", "");

document.write("<h1>" + greeting + " " + userName + "</h1>");
