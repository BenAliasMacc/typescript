"use strict";
// const a: string = "Hello World";
// const n: number = 3;
// const b: boolean = true;
// const d: null = null;
// const arrOfString: string[] = ["aze", "aze", "aze"];
// const arrOfNumber: number[] = [1, 2, 3];
// const arrOfBoth: (number|string )[] = [1, 2, "aze"];
// const user: {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"};
// const date: Date = new Date();
// const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
//     return 3;
// };
// function printId(id: number | string): void {
//     console.log(id.toString());    
// };
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
function printId(id) {
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
