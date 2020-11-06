const p = document.querySelector('p');
console.log(p);

const imgs = document.querySelectorAll('.item img');
console.log(imgs);

const heading = document.querySelector('h2');
console.log(heading.innerText);
console.log(heading.textContent);
/*
Will wait for the html to completely load before running the js
If you really want to put the script in the head
*/
// function init() {
//     const blah = document.querySelector('p');
//     console.log(blah);
// }

// document.addEventListener('DOMContentLoaded', init);
