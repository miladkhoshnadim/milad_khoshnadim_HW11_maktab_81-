


/////////////// practice 5-1:
/*
class Shape {
    #shapeName;
    get shapeName() {
        return this.#shapeName;
    }

    set shapeName(shapeName) {
        this.#shapeName = shapeName;
    }

    CalcArea(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Area of ${this.#shapeName} with Length ${x} is equal to ${y * x} `);
        } else if (this.#shapeName == 'rectangle') {
            console.log(`Area of ${this.#shapeName} with Length ${x} and width ${y} is equal to ${y * x} `);
        } else if (this.#shapeName == 'triangle') {
            console.log(`Area of ${this.#shapeName} with Base ${x} and height ${y} is equal to ${0.5 * y * x} `);
        } else if (this.#shapeName == 'circel') {
            console.log(`Area of ${this.#shapeName} with radius ${x} is equal to ${3.14 * x * x} `);
        } else {
            console.log(`the Area of ${this.#shapeName} is undefined for this program `);
        }
    }

    CalcPerimeter(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Perimeter of ${this.#shapeName} with Length ${x} is equal to ${(2 * x) + (2 * y)} `);
        } else if (this.#shapeName == 'rectangle') {
            console.log(`Perimeter of ${this.#shapeName} with Length ${x} and width ${y} is equal to ${(2 * x) + (2 * y)} `);
        } else if (this.#shapeName == 'triangle') {
            console.log(`Perimeter of ${this.#shapeName} with Base ${x} and height ${y} is equal to ${x + y + Math.sqrt((x * x) + (y * y))} `);
        } else if (this.#shapeName == 'circel') {
            console.log(`Perimeter of ${this.#shapeName} with radius ${x} is equal to ${2 * 3.14 * x} `);
        } else {
            console.log(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}


class NonPolygon extends Shape {
    #radius;
    constructor(shapeName) {
        super(shapeName);
    }

    get radius() {
        return this.#radius;
    }

    set radius(radius) {
        this.#radius = radius;
    }


    get calc() {
        return (super.CalcArea(this.#radius), super.CalcPerimeter(this.#radius))
    }

}

class Circel extends NonPolygon {

    constructor(shapeName, radius) {
        super(shapeName,radius);
    }

}


const circele = new Circel();
circele.shapeName = 'circel';
circele.radius = 3;
circele.calc;
*/









//////////////////////////// practice 5-2:
/*
class Shape {
    #shapeName;
    constructor(shapeName) {
        this.#shapeName = shapeName;
    }

    CalcArea(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Area of ${this.#shapeName} with Length ${x} is equal to ${y * x} `);
        } else if (this.#shapeName == 'rectangle') {
            console.log(`Area of ${this.#shapeName} with Length ${x} and width ${y} is equal to ${y * x} `);
        } else if (this.#shapeName == 'triangle') {
            console.log(`Area of ${this.#shapeName} with Base ${x} and height ${y} is equal to ${0.5 * y * x} `);
        } else if (this.#shapeName == 'circel') {
            console.log(`Area of ${this.#shapeName} with radius ${x} is equal to ${3.14 * x * x} `);
        } else {
            console.log(`the Area of ${this.#shapeName} is undefined for this program `);
        }
    }

    CalcPerimeter(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Perimeter of ${this.#shapeName} with Length ${x} is equal to ${(2 * x) + (2 * y)} `);
        } else if (this.#shapeName == 'rectangle') {
            console.log(`Perimeter of ${this.#shapeName} with Length ${x} and width ${y} is equal to ${(2 * x) + (2 * y)} `);
        } else if (this.#shapeName == 'triangle') {
            console.log(`Perimeter of ${this.#shapeName} with Base ${x} and height ${y} is equal to ${x + y + Math.sqrt((x * x) + (y * y))} `);
        } else if (this.#shapeName == 'circel') {
            console.log(`Perimeter of ${this.#shapeName} with radius ${x} is equal to ${2 * 3.14 * x} `);
        } else {
            console.log(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}


class NonPolygon extends Shape {
    #radius;
    constructor(shapeName, radius) {
        super(shapeName);
        this.#radius = radius;
    }

    get calc() {
        return (super.CalcArea(this.#radius), super.CalcPerimeter(this.#radius))
    }

}

class Circel extends NonPolygon {

    constructor(shapeName, radius) {
        super(shapeName,radius);
    }

}

const circele = new Circel('circel', 3);
circele.calc;
*/

