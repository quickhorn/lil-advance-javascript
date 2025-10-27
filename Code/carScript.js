class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }

    getDescription() {
        return `${this.name} has ${this.wheels} wheels.`
    }
}

class Car extends Vehicle{
    constructor(name, doors){
        super(name, 4);
        this.doors = doors;
    }

    getDescription() {
        return `${super.getDescription()} and ${this.doors} doors.`;
    }
}

class Bike extends Vehicle{
    constructor(name, type){
        super(name, 2);
        this.type = type;
    }

    getDescription(){
        return `${super.getDescription()} and is a ${this.type} type bike`
    }
}

const myCar = new Car("My Car", 4);
console.log(myCar.getDescription());

const myBike = new Bike("My Bike", "offRoad");
console.log(myBike.getDescription());