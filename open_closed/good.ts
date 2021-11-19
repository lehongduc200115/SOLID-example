/*
To resolve this problem we need to create a base User class.
For each roles needed, we need to create a new class.
*/
export class User {
    constructor(
        public name: string
    ) { }
}

export class Employee extends User {
    constructor(public name: string) {
        super(name);
    }
    greetCustomers(): string {
        return "Welcome to our store!";
    }
}

export class Customer extends User {
    constructor(public name: string) {
        super(name);
    }
    pay(amountOfMoney: number): string {
        return `Customer paid ${amountOfMoney}!`;
    }
}

export class Manager extends User {
    constructor(public name: string) {
        super(name);
    }
    addANewProduct(product: string): string {
        return `${product} added to menu!`;
    }
}