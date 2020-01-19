let upper = 2020;
let lower = 1993;

let random = Math.floor(Math.random() * (upper - lower + 1) + lower)

console.log(random);

document.getElementById('originyear').innerHTML = random;
