function Person(name, age) {
    this.name = name,
    this.age = age
    this.printDetails = function() {
        console.log({name: this.name, age: this.age});
    }
}

// function Student() {
//     this.classes = []
// }


const p = {}
Object.setPrototypeOf(p, Person.prototype)
Person.call(p, "avi", 28)

console.log(p);
p.printDetails()


function Car(brand) {
    this.brand = brand,
    this.drive = function() {
        console.log("vrrroooomm");
    }
    this.fuel = function() {
        console.log("putting gas…");
    }
}

const tesla = new Car("Tesla")
tesla.fuel = function() {
        console.log("charge…");
    }
console.log(tesla.fuel());
