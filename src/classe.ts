function reverse<T>(arr: readonly T[]): T[] {
    return [...arr].reverse();
}

class A {
    constructor (
        public a: number
    ) {

    }
}

const aInstance = new A(3);
console.log(aInstance.a);

class Collection<T> {
    constructor(private items: T[]) {

    }

    first (): T | null {
        return this.items[0] || null
    }
}

const a = new Collection<number>([1, 2, 3]);
const b = a.first()
