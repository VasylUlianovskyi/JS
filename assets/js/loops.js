// console.log("Пройти прямо");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо");
// console.log("Повернути на 90 град наліво");

// const TOTAL_STEP = 4;
// let currentStep = 1;

// while (currentStep <= TOTAL_STEP) {
//   console.log(currentStep);
//   console.log("Пройти прямо");
//   console.log("Повернути на 90 град наліво");
//   currentStep++;
// }

// const TOTAL_PAGE = 21;
// let currentPage = 9;

// while (currentPage <= TOTAL_PAGE) {
//   if (currentPage % 2 === 0)
//     console.log("Користувач читає сторінку:", currentPage);
//   currentPage++;
// }

// let value = Number(prompt("Input value:"));

// while (!Number.isFinite(value)) {
//   value = Number(prompt("Input value:"));
// }

// console.log(`${value} * ${value} = ${value * value}`);

// let value = null;

// do {
//   value = Number(prompt("Input value:"));
// } while (!Number.isFinite(value));

// console.log(`${value} * ${value} = ${value * value}`);

// let number = 50;

// do {
//   console.log(number--);
// } while (number >= 40);

// const CORRECT_PASSWORD = "qwert";
// const TRY_ATTEMPT = 3;
// let currentTry = 1;
// let isPasswordCorrect = false;

// do {
//   isPasswordCorrect = prompt("Input password:") === CORRECT_PASSWORD;
// } while (++currentTry <= TRY_ATTEMPT && !isPasswordCorrect);

// document.write(`Password is ${isPasswordCorrect ? "correct" : "wrong"}`);

// startPage = 1;
// stopPage = 10;
// step = 1;

// for (let startPage = 1; startPage <= stopPage; startPage++) {
//   console.log(startPage);
//  }

// let startNumber = 101;
// let endNumber = 91;
// for (let i = startNumber; i >= endNumber; i--) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// const firstNumber = 1;
// const lastNumber = 20;
// let mult = null;
// for (let a = firstNumber; a <= lastNumber; a++) {
//   mult += a;
//   console.log("mult :>> ", mult);
// }
// console.log("Total mult:", mult);

// const firstNumber = 5;
// const lastNumber = 12;
// let mult = 1;
// for (let a = firstNumber; a <= lastNumber; a++) {
//   if (a % 2 === 0) {
//     console.log(a);
//     mult *= a;
//   }
// }
// console.log(mult);
// const currentDate = new Date("2024-04-01");
// const startDate = currentDate.getDate();
// const monthNumber = currentDate.getMonth();

// const currentYear = currentDate.getFullYear();
// const nextMonth = monthNumber + 1;
// const lastMonthDate = new Date(currentYear, nextMonth, 0);
// const endDate = lastMonthDate.getDate();

// for (let date = startDate; date <= endDate; date++) {
//   console.log(date);
// }

// document.write("<table><thead><tr>");

// for (let date = startDate; date <= endDate; date++) {
//   document.write(`<th>${date}</th>`);
// }

// document.write("</tr></thead></table>");

//// ФУНКЦІЇ /////

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// alert("Hello");

// function myFunction(userName) {
//   // console.log(`Hello, ${userName}`);
//   const userGreeting = `Hello, ${userName}`;

//   return userGreeting;
// }

// myFunction("Iryna");
// myFunction("Vadym");

// const a = myFunction("Ivo");
// console.log("a :>> ", a);

// const result = sum(4, 5);
// function sum(par1, par2) {
//   const result1 = par1 + par2;

//   return result1;
// }
// console.log(result);

// function steppe(num1, num2) {
//   return num1 ** num2;
// }

// const result = steppe(3, 4);

// // console.log(result);

// function sumFromAtoB(from, to) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log("sumFromAtoB(1, 5) :>> ", sumFromAtoB(1, 5));

// function isAdult(years) {
//   const ADULT = 18;
//   if (years >= ADULT) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let age = isAdult(18);
// console.log(age);

// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(14));

// const calcSum = function sum(a, b) {
//   return a + b;
// };

// console.log("calcSum(2, 4) :>> ", calcSum(2, 4));

// const steppeAB = function (a, b) {
//   return a ** b;
// };

// console.log("steppeAB(2, 22) :>> ", steppeAB(2, 22));

/**
//  * Function calculates sumn of two numders
//  * @param {number} a - First summand
//  * @param {number} b  Second summand
//  * @returns {number} Returns sumn of arguments
//  */
// function sum2(a, b = 1) {
//   return a + b;
// }

// console.log("sum2(2)", sum2(0, 0));

// /**
//  *Function calculate the sum of all numbers from the first to the last
//  * @param {number} to last number
//  * @param {number} [b = 1] first number
//  * @returns {number} sum of all numbers
//  */

// function sumFromAtoB(to, from = 1) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log("sumFromAtoB(6) :>> ", sumFromAtoB(11));

//ОБʼЄКТИ,,

// const obj1 = {};

// const obj = Object();

// const obj3 = new Object();

// console.log(obj);

// const user = {
//   firstname: "Test",
//   lastName: "Testovych",
//   age: 25,
//   password: "qwert",
// };

// // console.log(user);

// const userName = user.firstname;
// console.log(userName);

// user.age = 26;

// console.log(user);

// user.email = "test@mail.com";

// console.log(user);

// delete user.password;

// console.log(user);

// const objAuto = {
//   firm: "pagani",
//   model: "zonda",
//   year: 2022,
//   seria: 3455513,
//   color: "green",
// };

// console.log(objAuto);

// const auto = objAuto.firm;
// console.log(auto);

// objAuto.color = "blue";

// delete objAuto.year;

// objAuto.owner = "Nick Nickolas";

// const ownerName = objAuto.owner;

// console.log(ownerName);

// const user1 = user;

// user1.firstname = "Nick";
// console.log("user1 :>> ", user1);
// console.log("user :>> ", user);

// const user2 = Object.assign({}, user);

// console.log(user2);

// console.log(user2 === user);

// const user3 = { ...user };

// console.log(user3);

// console.log(user3 === user);

// const car = Object.assign({}, objAuto);
// objAuto.color = "gold";

// console.log(car);
// console.log(car === objAuto);

// const car1 = { ...objAuto };
// objAuto.color = "black";

// console.log(car1);
// console.log(car1 === objAuto);

// const user = {
//   firstName: "Test",
//   lastName: "Testovych",
//   age: 25,
//   password: "qwert",
//   // getFullName: function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   // changePassword: function (newPassw) {
//   //   this.password = newPassw;
//   // },
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changePassword(newPassw) {
//     this.password = newPassw;
//   },
// };

// function getFullName(firstName, lastName) {
// //   ;
// // }

// const fullName = getFullName(user.firstName, user.lastName);

// console.log(fullName);

// const userFullName = user.getFullName();

// console.log(userFullName);

// user.changePassword("123456");

// console.log(user);

// const objAuto = {
//   firm: "pagani",
//   model: "zonda",
//   year: 2022,
//   seria: 3455513,
//   color: "green",
//   getNewColor(newColor) {
//     this.color = newColor;
//   },
// };

// objAuto.getNewColor("orange");
// console.log(objAuto);

// const userProp = prompt("Input propetry");

// console.log(user[userProp]);

// for (key in user) {
//   console.log("key :>> ", key, user[key]);
// }

// for (let propt in objAuto) {
// //   console.log(`car: ${propt} = ${objAuto[propt]}`);
// }

// console.dir(objAuto);

// const human = {
//   name: "Ivo",
//   parametrs: {
//     height: 1.8,
//     weight: 57,
//   },
// };

// console.log("human :>> ", human);

// console.log(human.parametrs.height);
