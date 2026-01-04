class Phone {
    constructor(brand, model) {
        this.brand = brand,
        this.model = model
    }

    details() {
        console.log(`Phone: ${this.brand} ${this.model}`);
    }
}

// const myphone = new Phone("Samsung", "S22")
// myphone.details()

class Rectangle {
    constructor(width, height) {
        this.width = width,
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}

// const a = new Rectangle(5, 4)
// console.log(a.area())

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner,
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
        }
    }

    checkBalance() {
        console.log(`Balance: ${this.balance}`);
    }
}

// const acount = new BankAccount("avi", 17000)
// acount.checkBalance()
// acount.deposit(7000)
// acount.checkBalance()
// acount.withdraw(15000)
// acount.checkBalance()
// acount.withdraw(11000)
// acount.checkBalance()
// acount.withdraw(9000)
// acount.checkBalance()

class Animal {
    constructor (name) {
        this.name = name
    }
    speek() {
        console.log(`${this.name} makes a sound`);        
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);        
    }
}

// const dog1 = new Dog("Rocky")
// dog1.speek()
// dog1.bark()

class Vehicle {
    constructor (type) {
        this.type = type
    }
    describe() {
        console.log(`This is a ${this.type}`);        
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type)
        this.brand = brand
    }

    info() {
        console.log(`This is a ${this.brand} ${this.type}`);        
    }
}

// const mycar = new Car("car", "BMW")
// mycar.describe()
// mycar.info()

class Shape {
    area() {
        return 0
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    area() {
        return Math.PI * (this.radius ** 2)
    }
}

class Square extends Shape {
    constructor(side) {
        super()
        this.side = side
    }
    area() {
        return this.side ** 2
    }
}

// const a = new Circle(3)
// const b = new Square(4)
// console.log(a.area())
// console.log(b.area())


class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
    info() {
        console.log(`${this.title} by ${this.author}`);
    }
}

// const b = new Book("The Hobbit", "Tolkien")
// b.info()



class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name),
        this.school = school
    }
    study() {
        console.log(`${this.name} is studying at ${this.school}`);
    }
}

// const s = new Student("Elimelech", "Kodkod")
// s.greet()
// s.study()


class Employee {
    #salary
    constructor(salary) {
        this.#salary = salary
    }
    getSalary() {
        return this.#salary
    }
    work() {
        console.log(`Employee is working`);
    }
}

class Manager extends Employee {
    work() {
        console.log(`Manager is managing`);
    }
}

const a = new Manager(5000)
const b = new Employee(4000)

console.log(a.getSalary())
a.work()
console.log(b.getSalary())
b.work()