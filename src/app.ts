type User = {firstname: string, [key: string]: string}
type DateString = string;
type Id = string | number;
type Identity<ArgType> = (arg: ArgType) => ArgType;
type Username = keyof User;
type Userfirstname = User['firstname'];

function consoleSize<Type extends {length: number}>(arg: Type): Type {
    console.log(arg.length);    
    return arg;
};

const abb = consoleSize([5])

function identity<ArgType>(arg: ArgType): ArgType {
    return arg
}

const userB = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
}

type UserB = typeof userB

const aa = identity<number>(3);

function first<Type>(arg: Type[]): Type {
    return arg[0];
}

const aaa: Array<string | number> = ["add", "def", 2];

const a: string = "Hello World";
const n: number = 3;
const b: boolean = true;
const d: null = null;
const arrOfString: string[] = ["aze", "aze", "aze"];
const arrOfNumber: number[] = [1, 2, 3];
const arrOfBoth: (number|string )[] = [1, 2, "aze"];
const user: {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"};
const userWithType: User = {firstname: "John", lastname: "Doe"};
const date: Date = new Date();
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3;
};

function printId(id: number | string): void {
    console.log(id.toString());    
};

const compteur = document.querySelector<HTMLButtonElement>('#compteur');
let i = 0;

const increment = (e: Event) => {
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    };
};

compteur?.addEventListener('click', increment);

function printId2(id: string | number) {
    if (typeof id === "number") {
        console.log(id.toString() + " is a number");
        
    } else {
        console.log(id.toUpperCase() + " is a string");
    }
}

function example (a :string | string[]) {
    if (Array.isArray(a)) {
        return a[0]
    }
    return
}

function example2(a: MouseEvent | HTMLInputElement) {
    if ("dsgftdg" in a) {
        a
    }
}

function isDate (a: any): a is Date {
    return a instanceof Date
}

function isDateExample(a: Date | HTMLInputElement) {
    if (isDate(a)) {
        a
    }
}



