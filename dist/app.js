"use strict";
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
;
const abb = consoleSize([5]);
function identity(arg) {
    return arg;
}
const userB = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
};
const aa = identity(3);
function first(arg) {
    return arg[0];
}
const aaa = ["add", "def", 2];
const a = "Hello World";
const n = 3;
const b = true;
const d = null;
const arrOfString = ["aze", "aze", "aze"];
const arrOfNumber = [1, 2, 3];
const arrOfBoth = [1, 2, "aze"];
const user = { firstname: "John", lastname: "Doe" };
const userWithType = { firstname: "John", lastname: "Doe" };
const date = new Date();
const cb = (e) => {
    return 3;
};
function printId(id) {
    console.log(id.toString());
}
;
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
    ;
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
function printId2(id) {
    if (typeof id === "number") {
        console.log(id.toString() + " is a number");
    }
    else {
        console.log(id.toUpperCase() + " is a string");
    }
}
function example(a) {
    if (Array.isArray(a)) {
        return a[0];
    }
    return;
}
function example2(a) {
    if ("dsgftdg" in a) {
        a;
    }
}
function isDate(a) {
    return a instanceof Date;
}
function isDateExample(a) {
    if (isDate(a)) {
        a;
    }
}
