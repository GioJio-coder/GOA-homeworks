class Bank {
constructor(username) {
    this.username = username;
    this.balance = 0; 
}

deposit(cash) {
    this.balance = this.balance + cash; 
    console.log("New Balance: " + this.balance);
}
}

let account = new Bank("Giorgi");

account.deposit(100); 
account.deposit(50);  



class Car {
constructor(brand, model) {
    this.brand = brand;
    this.model = model;
}

start() {
    console.log(`${this.brand} ${this.model} is running`);
}
}

const car1 = new Car("BMW", "F60");
car1.start(); 