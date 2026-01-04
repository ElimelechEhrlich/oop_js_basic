class Hobby{
    constructor(name,description,popularity){
        this.name=name
        this.description=description
        this.popularity=popularity
    }
    log(){
        console.log(`my name is ${this.name} my description is ${this.description} my popularity is ${this.popularity}`)
    }

}
// const h1 =new Food("pica",123,"good")
// h1.log()

class Car {
    #id = 4567;
    constructor(id, brand, maxSpeed, isElectric) {
        this.#id = id
        this.brand = brand,
        this.maxSpeed = maxSpeed,
        this.isElectric = isElectric
    }

    setMaxSpeed(maxSpeed) {
        if (maxSpeed) {
            this.maxSpeed = maxSpeed
        }
    }

    getId() {
        return this.#id
    }

    printDetails() {
        console.log(this);
    }
}

// const car1 = new Car(1234, "mazda", 150, false)
// car1.setMaxSpeed(140)
// car1.printDetails()

class Animal {
    constructor (name, breed, numOfLegs, isVegan, sound) {
        this.name = name,
        this.breed = breed,
        this.numOfLegs = numOfLegs,
        this.isVegan = isVegan,
        this.sound = sound
    }

    speek() {
        console.log(`${this.name} says ${this.sound}`);        
    }
}


class Dog extends Animal {
    constructor(name, breed, numOfLegs, isVegan, sound) {
        super(name, breed, numOfLegs, isVegan, sound)
        this.bark = true
    }
}


class Cat extends Animal {
    constructor(name, breed, numOfLegs, isVegan, sound) {
        super(name, breed, numOfLegs, isVegan, sound)
        this.scratch = true
    }
}

const dog1 = new Dog("a", "b", 4, false, "ha")
console.log(dog1);
dog1.speek()
const cat1 = new Cat("c", "d", 4, false, "meow")
console.log(cat1);
cat1.speek()

