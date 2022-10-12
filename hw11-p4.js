


/////////////// practice 4-1:
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
            console.log(`Perimeter of ${this.#shapeName} with Base ${x} and height ${y} is equal to ${ x + y + Math.sqrt((x * x )+ (y * y))} `);
        } else {
            console.log(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}


class Polygon extends Shape {
    #width;
    #hight;
    constructor(shapeName) {
        super(shapeName);
    }

    get width() {
        return this.#width;
    }

    set width(width) {
        this.#width = width;
    }

    get hight() {
        return this.#hight;
    }

    set hight(hight) {
        this.#hight = hight;
    }

    get calc() {
        return (super.CalcArea(this.#width, this.#hight), super.CalcPerimeter(this.#width, this.#hight))
    }
}

class Reactangle extends Polygon {

    constructor(shapeName, width, hight) {
        super(shapeName,width,hight);
    }

}

class Square extends Polygon {

    constructor(shapeName, width, hight) {
        super(shapeName,width,hight);
    }

}


const squoare = new Square();
squoare.shapeName = 'square';
squoare.width = 3;
squoare.calc;

const rectangle = new Reactangle();
rectangle.shapeName = 'rectangle';
rectangle.width = 3;
rectangle.hight = 4;
rectangle.calc;
*/



///////////////////// practice 4-2:
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
            console.log(`Perimeter of ${this.#shapeName} with Base ${x} and height ${y} is equal to ${ x + y + Math.sqrt((x * x )+ (y * y))} `);
        } else {
            console.log(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}


class Polygon extends Shape {
    #width;
    #hight;
    constructor(shapeName, width, hight) {
        super(shapeName);
        this.#width = width;
        this.#hight = hight;
    }

    get calc() {
        return (super.CalcArea(this.#width, this.#hight), super.CalcPerimeter(this.#width, this.#hight))
    }
}

class Reactangle extends Polygon {

    constructor(shapeName, width, hight) {
        super(shapeName,width,hight);
    }

}

class Square extends Polygon {

    constructor(shapeName, width, hight) {
        super(shapeName,width,hight);
    }

}

const squoare = new Square('square', 3);
squoare.calc;
const rectangle = new Reactangle('rectangle', 3, 4);
rectangle.calc;
*/
