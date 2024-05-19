// function sayHello(userName, userSurname) {
//   document.write(`<p>Hello, ${userName} ${userSurname}!</p>`);
// }

// sayHello(prompt("Input name:", "Name"), prompt("Input surname:", "Surname"));

// function sayHello(userName, userSurname) {
//   return `Hello, ${userName} ${userSurname}!`;
// }

// const helloString = sayHello(
//   prompt("Input name:", "Name"),
//   prompt("Input surname:", "Surname")
// );

// document.write(`<p>${helloString}</p>`);

// function sum(a, b) {
//   return a + b;
// }

// function inputSummand(summandNumber) {
//   let summand;
//   do {
//     summand = prompt(`Enter ${summandNumber} numder`);
//   } while (!Number.isFinite(+summand) || summand === "");
//   return Number(summand);
// }

// const firstSummand = inputSummand(1);
// const secondSummand = inputSummand(2);

// const result = sum(firstSummand, secondSummand);
// console.log(result);

// const age = 23;

// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(age));

const age = 16;

// Змінні для заголовка новини
const newsTitle1 = "Lorem ipsum dolor sit amet";
const newsTitle2 = "Consectetur adipiscing elit";
const newsTitle3 = "Sed do eiusmod tempor";

// Змінні для тіла новини
const newsBody1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const newsBody2 =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const newsBody3 =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Змінні для дати новини
// const newsDate1 = new Date("2024-05-18"); // May 18, 2024 (місяці починаються з 0)
// const newsDate2 = new Date("2024-05-17"); // May 17, 2024
// const newsDate3 = new Date("2024-05-16"); // May 16, 2024

// function news(newsTitle, newsBody, newsDate) {
//   const todayDate =
//     newsDate.toLocaleDateString() === new Date().toLocaleDateString()
//       ? "<span class='todayNews'>New!</span>"
//       : "";

//   return `
//   <article>
//     <h3>${newsTitle} ${todayDate}</h3>
//     <p>${newsBody}</p>
//     <p>${newsDate.toDateString()}</p>
//   </article>`;
// }

// if (age < 18) {
//   document.write("новини переглядає неповнолітній");
// }

// document.write(
//   news(newsTitle1, newsBody1, newsDate1),
//   news(newsTitle2, newsBody2, newsDate2),
//   news(newsTitle3, newsBody3, newsDate3)
// );

// pow(4, 2);

/**
 * Function create used card
//  * @function userCard
//  * @param {string} surmane - user surname
//  * @param {string} [name= "Nick"]  user name
//  * @returns {string} Making user card
//  */

// function userCard(surmane, name = "Nick") {
//   return `
//   <article>
//   <h2> ${name} ${surmane}</h2>
//   </article>

//   `;
// }

// document.write(userCard("Nickovych"));

function fName(par1, par2, par3) {}

const fName1 = function (par1, par2) {};

const userCard = function (surmane, name = "Nick") {
  return `
    <article>
    <h2> ${name} ${surmane}</h2>
    </article>
  
    `;
};

document.write(userCard("Nickovych"));
