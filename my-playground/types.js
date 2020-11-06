/* eslint-disable*/
// disabled so eslint will not correct the backticks, quotes, etc.
const name = 'jc';
const middle = "garcia";
const last = `francisco`;

const sentence = "she's so \"cool\"";
const sentence2 = `shes's so "cool"`;

const song = `blah
blah
blah
blah
`;

const hello = `hello my name is ${name}. I am ${1 + 100} years old.`;

const html = `
<div>
 <h2>${name}</h2>
 <p>${hello}</p>
</div>
`;

// injects html to the DOM
document.body.innerHTML = html;
console.log(html);

const person = {
    first: 'jc',
    last: 'francisco',
    age: 100
};