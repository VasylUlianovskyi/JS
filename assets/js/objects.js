// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsDate1 = new Date("2024-05-18");

// const obj1 = new Object();

// const obj2 = Object();

// const obj3 = {};

// const news = {
//   newsTitle: "Lorem ipsum dolor sit amet",
//   newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. S",
//   newsDate: new Date("2024-05-18"),
// };

// console.log("news :>> ", news);

// console.log(news.newsTitle);

// news.newsDate = new Date("2024-05-19");

// console.log(news);

// news.author = "Nick Nickovych";

// console.log(news);

// delete news.newsDate;

// console.log(news);

// const car = {
//   brand: "Tesla",
//   model: "S",
//   year: 2020,
//   numder: "BC 2343IA",
//   color: "red",
//   owner: {
//     firstName: "Nick",
//     lastName: "Nickovych",
//   },
// };

// console.log(car.model);

// car.color = "blue";

// delete car.year;

// car.author = "Ilon Mask";

// console.log("car:", car);

// document.write(`<h2>${car.brand}, ${car.model}</h2>`);
// document.write(`<p>${car.owner.firstName} ${car.owner.lastName}</p>`);

// const carCopy = Object.assign({}, car);

// console.log(carCopy === car);

// const carCopy2 = { ...car };

// console.log(carCopy2 === car);

// console.log(carCopy);

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }
const user = {
  firstName: "Test",
  lastName: "Testovych",
  passw: "qwert",
  age: 23,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  changePass(newPassw) {
    this.passw = newPassw;
  },
};

// const user1 = {
//   firstName: "Nick",
//   lastName: "Nickovych",
//   passw: "qwert1",
//   age: 23,
//   // getFullName() {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   getFullName,
// };

const fullName = user.getFullName();
// const fullName1 = user1.getFullName();
user.changePass(prompt("New password"));

console.log(user);
// console.log(fullName1);

document.write(`<h2>${user.getFullName()}</h2>`);
// document.write(`<h2>${user1.getFullName()}</h2>`);
