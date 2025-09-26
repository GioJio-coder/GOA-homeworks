class Teacher {
constructor(name, subject) {
    this.name = name;
    this.subject = subject;
}
introduce() {
    console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`);
}
}

class Phone {
 constructor(brand, model) {
    this.brand = brand;
    this.model = model;
}ring() {
    console.log(`The ${this.brand} ${this.model} is ringing!`);
}
}

class Movie {
constructor(title, year) {
    this.title = title;
    this.year = year;
}
play() {
    console.log(`Now playing: ${this.title} (${this.year})`);
}
}

class Cat {
constructor(name, color) {
    this.name = name;
    this.color = color;
}
meow() {
    console.log(`${this.name} the ${this.color} cat says Meow!`);
}
}

class BankCard {
constructor(cardNumber, balance) {
    this.cardNumber = cardNumber;
    this.balance = balance;
}
withdraw(amount) {
    if (amount > this.balance) {
    console.log("Insufficient funds!");
    } else {
    this.balance -= amount;
    console.log(`New balance: ${this.balance}`);
    }
}
}

const t1 = new Teacher("Giga", "English")
t1.introduce()
const p1 = new Phone("Samsung", "S25")
p1.ring()
const m1 = new Movie("Breaking Bad", 2008)
m1.play()
const c1 = new Cat("Bao", "Yellow")
c1.meow()
const b1 = new BankCard("1234-5678", 500)
b1.withdraw(200)
b1.withdraw(400)