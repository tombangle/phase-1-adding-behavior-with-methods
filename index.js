class Cat {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    speak() {
        return `${this.name} says meow!`;
    }

    beforeEach() {
        cy.get('body').contains('has a class of cat');
    }
}


class Dog {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    speak() {
        return `${this.name} says woof!`;
    }

    beforeEach() {
        cy.get('body').contains('has a class of dog');
    }
}

class Bird {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    speak() {
        if (this.gender === 'female') {
            return `${this.name} says squawk!`;
        } else {
            return `It's me! ${this.name}, the parrot!`;
        }
    }

    beforeEach() {
        cy.get('body').contains('has a class of Bird');
    }
}
