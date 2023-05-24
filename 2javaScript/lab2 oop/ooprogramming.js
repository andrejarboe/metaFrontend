class Person {
	constructor(name = 'Tom', age = 20, energy = 100) {
		this.name = name;
		this.age = age;
		this.energy = energy;
	}
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

class Worker extends Person {
    constructor(
        name,
        age,
        energy,
        xp = 0,
        hourlyWage = 10,
    ) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var internObject = new Worker(0,'Bob', 21, 110, 0, 10);
    internObject.goToWork();
    return internObject;
}

// Task 4: Code a manager object, methods
function manager() {
    
}