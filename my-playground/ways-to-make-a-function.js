// Anonymous function
// function (firstName) {
//     return `Dr. ${firstName}`
// }
/* eslint-disable */
// function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// hoisting - running a function before it's defined

// arrow function
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     first: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({
  first: `${first} ${last}`,
  age: 0,
});

// IIFE
// Immediately Invoked Function Expression

(function (word) {
  console.log(`This is an IIFE ${word}`);
})(10);

// Methods
const jc = {
  name: 'JC Francisco',
  sayHi: function() {
    console.log('Hello');
    return 'Hello return';
  },
  // short hand method
  yellHi() {
    console.log('HEY!');
  },
  // arrow function
  whisperHi: (name) => {
    console.log(`Helloooo ${name}`)
  }
};

// callback functions

// click callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', handleClick);
button.addEventListener('click', jc.yellHi);
button.addEventListener('click', function() {
  console.log('Nice Job');
});

// timer callback
setTimeout(function() {
 console.log('DING'); 
}, 1000);