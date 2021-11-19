enum Role {
    EMPLOYEE,
    CUSTOMER
}

/*
The problem is that if we later want to add a manager roles.
We need to modify this class, this circumstances can get worse
when more role is added.
*/
export class User {
    constructor(
        public name: string,
        public role: Role
    ) { }

    // Customers pay the bills.
    pay(amountOfMoney: number): string {
        if (this.role === Role.CUSTOMER) {
            return `Customer paid ${amountOfMoney}!`;
        }
    }   

    // Employees greet the customers.
    greetCustomers(): string {
        if (this.role === Role.EMPLOYEE) {
            return "Welcome to our store!";
        }
    }
}