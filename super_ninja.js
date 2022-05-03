class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength);
        this.wisdom = 10;
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        console.log("Measure twice. Cut once");
    }
}

const master = new Sensei('Sarutobi');
master.speakWisdom();
master.showStats();

// const ninja1 = new Ninja("Hyabusa", 50);
// ninja1.drinkSake();
// ninja1.sayName();
// ninja1.showStats();
