"use strict";

/* //  Default parameters
const bookings = [];

const createBooking = function (roomNum, numGuest = 2, price = 500 * numGuest) {
  const booking = {
    roomNum,
    numGuest,
    price,
  };
  bookings.push(booking);
};

createBooking("A202", 2, 1000);
createBooking("B702", 4, 2000);
createBooking("D555");
createBooking("B555", 10, 100);
createBooking("A111", undefined, 3000);
console.log(bookings); */

/* // Values vs. references
const flight = "B233";

const sadril = {
  name: "Sadril",
  passport: 5248895425,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "L344";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 5248895425) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
  // console.log(flightNum);
  // console.log(passenger);
};

checkIn(flight, sadril);
// console.log(flight);
console.log(sadril);
// JS does not have passing by reference, only passing by value  (for object - pass object's reference as a value)
 */

/* // Functions accepting callback functions
// 1. first-class function
// 2. higher-order function
// 3. callback function

// Sawmill
function logCutter(logs) {
  let logPieces = 0;
  for (const log of logs) {
    logPieces += log;
  }
  return logPieces;
}

function logCounter(logs) {
  return logs.length;
}

// Higher-order function
function sawmill(logs, fn) {
  console.log(`Operated by: ${fn.name}`);
  return fn(logs);
}

console.log(sawmill([12, 15, 12, 7, 8, 9, 6, 2, 14], logCounter));
console.log(sawmill([12, 15, 12, 7, 8, 9, 6, 2, 14], logCutter)); */

/* // Functions returning functions (currying functions)
function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

greet("Good night")("Fahim");

// Lambda expressions
function calcVAT(rate) {
  return function (price) {
    return price + price * rate;
  };
}

console.log(calcVAT(0.1)(500));

const calcVATArrow = (rate) => (price) => price + price * rate;

// console.log(calcVATArrow(0.25)(1000));
const totalPrice = calcVATArrow(0.25);
console.log(totalPrice(255));
console.log(totalPrice(522)); */

/* // Call
const kajalRekhaWings = {
  airline: "Kajal Rekha Wings",
  code: "KRW",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.code}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.code}${flightNum}`,
      passengerName: `${name}`,
    });
  },
};

const sadrilExpressAir = {
  airline: "Sadril Express Airlines",
  code: "SEA",
  bookings: [],
};

const tanishaWings = {
  airline: "Tanisha Wings",
  code: "TW",
  bookings: [],
};

// Apply
// const shohanBooking = [777, "Shohan"];
// kajalRekhaWings.book.apply(sadrilExpressAir, shohanBooking);

// kajalRekhaWings.book.call(sadrilExpressAir, 720, "Sadril");
// kajalRekhaWings.book.call(tanishaWings, 122, "Tanni");
// kajalRekhaWings.book.call(tanishaWings, ...shohanBooking);

// kajalRekhaWings.book(420, "Fahim");
// kajalRekhaWings.book(322, "Tumpa");

// console.log(kajalRekhaWings.bookings);
// console.log(sadrilExpressAir.bookings);
// console.log(tanishaWings.bookings);

// Bind
// const bookSadril = kajalRekhaWings.book.bind(sadrilExpressAir);
// const bookTanisha = kajalRekhaWings.book.bind(tanishaWings);
// const bookKajal = kajalRekhaWings.book.bind(kajalRekhaWings);
// const bookKajal555 = kajalRekhaWings.book.bind(kajalRekhaWings, 555);

// bookSadril(111, "Ayesha");
// bookTanisha(222, "Maisha");
// bookKajal(333, "Nibir");
// bookKajal555("Shohan");
// bookKajal555("Tahmina");

// Restaurant
const rest1 = {
  name: "Burger Villa",
  code: "BV",
  orders: [],
  foods: ["Burger", "Pizza", "Pasta", "Noddles", "French Fries"],
  orderFood: function (
    foodIndex = 0,
    foodCount = 1,
    name,
    address,
    time,
    price = 100 * foodCount
  ) {
    console.log(
      `${name} ordered ${foodCount} ${this.foods[foodIndex]}(s) from ${address} at ${time}, Price: ${price}`
    );
    this.orders.push({
      name: `${name}`,
      food: `${this.foods[foodIndex]}`,
      pieces: `${foodCount}`,
      price: `${price}`,
      address: `${address}`,
      time: `${time}`,
    });
  },
};

const rest2 = {
  name: "Pasta King",
  code: "PK",
  orders: [],
  foods: [
    "Burger",
    "Chilli Chicken Fries",
    "Pizza",
    "Pasta",
    "Noddles",
    "French Fries",
  ],
};

const orderRest2 = rest1.orderFood.bind(rest2);
const orderRest2Noodles = rest1.orderFood.bind(rest2, 4);

orderRest2(1, 10, "Tumpa", "Dhaka", "10:00PM");
rest1.orderFood(2, 5, "Shohan", "Sirajganj", "11:00PM");
orderRest2Noodles(2, "Rebecca", "Dhaka", "08:00PM");

console.log(rest1.orders);
console.log(rest2.orders); */

/* //  Immediately invoked function expressions (IIFE)
// const runOnce = function () {
//   console.log("This function never run again!");
// };
// runOnce();
// runOnce();
// runOnce();
// runOnce();

(function () {
  console.log("This function never run again!");
})();

(() => console.log("This function never run again!"))();

{
  const privateNumber = 200;
}

// console.log(privateNumber); */
