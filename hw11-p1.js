


/////////////// practice 1-1:
/*
class Shape {
    #shapeName;

    get shapeName(){
        return this.#shapeName;
    }

    set shapeName(shapeName){
        this.#shapeName = shapeName;
    }

    CalcArea(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Area of ${this.#shapeName} is equal to ${y * x} `);
        } else if (this.#shapeName == 'rectangle'){
            console.log(`Area of ${this.#shapeName} is equal to ${y * x} `);
        }else if (this.#shapeName == 'triangle'){
            console.log(`Area of ${this.#shapeName} is equal to ${0.5*y * x} `);
        } else {
            console.log(`the Area of ${this.#shapeName} is undefined for this program `);
        }
    }

    CalcPerimeter(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Perimeter of ${this.#shapeName} is equal to ${(2 * x) + (2 * y)} `);
        } else if (this.#shapeName == 'rectangle'){
            console.log(`Perimeter of ${this.#shapeName} is equal to ${(2 * x) + (2 * y)} `);
        }else if (this.#shapeName == 'triangle'){
            console.log(`Perimeter of ${this.#shapeName} is equal to ${(2 * x) + y} `);
        } else {
            console.log(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}

const square = new Shape();
square.shapeName = 'square';
console.log(square);
square.CalcArea(5);
square.CalcPerimeter(5);
const rectangle = new Shape();
rectangle.shapeName = 'rectangle';
console.log(rectangle);
rectangle.CalcArea(3, 4);
rectangle.CalcPerimeter(3, 4);
*/





/////////////////////// practice 1-2:
/*
class Shape {
    #shapeName;
    constructor(shapeName) {
        this.#shapeName = shapeName;
    }

    CalcArea(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Area of ${this.#shapeName} is equal to ${y * x} `);
        } else if (this.#shapeName == 'rectangle'){
            console.log(`Area of ${this.#shapeName} is equal to ${y * x} `);
        }else if (this.#shapeName == 'triangle'){
            console.log(`Area of ${this.#shapeName} is equal to ${0.5*y * x} `);
        } else {
            console.log(`the Area of ${this.#shapeName} is undefined for this program `);
        }
    }

    CalcPerimeter(x, y = x) {
        if (this.#shapeName == 'square') {
            console.log(`Perimeter of ${this.#shapeName} is equal to ${(2 * x) + (2 * y)} `);
        } else if (this.#shapeName == 'rectangle'){
            console.log(`Perimeter of ${this.#shapeName} is equal to ${(2 * x) + (2 * y)} `);
        }else if (this.#shapeName == 'triangle'){
            console.log(`Perimeter of ${this.#shapeName} is equal to ${(2 * x) + y} `);
        } else {
            console.log(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}

const square = new Shape('square');
console.log(square);
square.CalcArea(5);
square.CalcPerimeter(5);
const rectangle = new Shape('rectangle');
console.log(rectangle);
rectangle.CalcArea(3, 4);
rectangle.CalcPerimeter(3, 4);
*/
