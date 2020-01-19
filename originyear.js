//Random number generator

let upper = 2020;
let lower = 1993;

let random = Math.floor(Math.random() * (upper - lower + 1) + lower)

console.log(random);

document.getElementById('originyear').innerHTML = "The idea for TheShoeBox was born in " + random + "  when founder, Jeff Zalischi, wanted nice shoes but didn't have the time to shop for them. Being someone that is very active and on the go, he would contantly have to replace his shoes every couple months. ";
