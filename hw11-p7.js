



/////////////// practice 7:

class Shape {
    #shapeName;
    constructor(shapeName) {
        this.#shapeName = shapeName;
    }

    CalcArea(x, y = x) {
        if (this.#shapeName == 'square') {
            return (y * x);
        } else if (this.#shapeName == 'rectangle') {
            return (y * x);
        } else if (this.#shapeName == 'triangle') {
            return (0.5 * y * x);
        } else if (this.#shapeName == 'circel') {
            return (3.14 * x * x);
        } else if (this.#shapeName == 'Cylindr') {
            return (3.14 * x * x * y);
        } else {
            return alert(`the Area of ${this.#shapeName} is undefined for this program `);
        }
    }

    CalcPerimeter(x, y = x) {
        if (this.#shapeName == 'square') {
            return ((2 * x) + (2 * y));
        } else if (this.#shapeName == 'rectangle') {
            return ((2 * x) + (2 * y));
        } else if (this.#shapeName == 'triangle') {
            return (x + y + Math.sqrt((x * x) + (y * y)));
        } else if (this.#shapeName == 'circel') {
            return (2 * 3.14 * x);
        } else if (this.#shapeName == 'Cylindr') {
            return (2 * 3.14 * x * y);
        } else {
            return alert(`the Perimeter of ${this.#shapeName} is undefined for this program `);
        }
    }

}


class NonPolygon extends Shape {
    #radius;
    constructor(shapeName, radius) {
        super(shapeName);
        this.#radius = radius;
    }

    get calcA() {
        return (super.CalcArea(this.#radius))
    }

    get calcP() {
        return (super.CalcPerimeter(this.#radius))
    }

}

class Cylindrical extends NonPolygon {
    #hight;
    constructor(shapeName, radius, hight) {
        super(shapeName);
        this.radius = radius
        this.#hight = hight
    }
    get calculatA() {
        return (super.CalcArea(this.radius, this.#hight))
    }

    get calculatP() {
        return (super.CalcPerimeter(this.radius, this.#hight))
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

    get calcA() {
        return (super.CalcArea(this.#width, this.#hight))
    }

    get calcP() {
        return (super.CalcPerimeter(this.#width, this.#hight))
    }

}


const select = document.getElementById('selectbox');
select.setAttribute('onchange', "changeFunc()");

function changeFunc() {
    const selectBox = select.options[select.selectedIndex].value;
    console.log(selectBox)

    if (selectBox == 'Rectangel') {
        document.getElementById('Rectangel').style.display = 'revert';
        document.getElementById('square').style.display = 'none';
        document.getElementById('Circel').style.display = 'none';
        document.getElementById('Cylandrical').style.display = 'none';

    } else if (selectBox == 'square') {
        document.getElementById('square').style.display = 'revert';
        document.getElementById('Rectangel').style.display = 'none';
        document.getElementById('Circel').style.display = 'none';
        document.getElementById('Cylandrical').style.display = 'none';

    } else if (selectBox == 'Circel') {
        document.getElementById('Circel').style.display = 'revert';
        document.getElementById('Rectangel').style.display = 'none';
        document.getElementById('square').style.display = 'none';
        document.getElementById('Cylandrical').style.display = 'none';
    } else if (selectBox == 'Cylandrical') {
        document.getElementById('Cylandrical').style.display = 'revert';
        document.getElementById('Rectangel').style.display = 'none';
        document.getElementById('Circel').style.display = 'none';
        document.getElementById('square').style.display = 'none';
    } else {
        console.log('error in select click')
    }
}

const button = document.getElementById('button');
button.addEventListener("click", function () {
    const selectBox = select.options[select.selectedIndex].value;
    const input = document.querySelectorAll(`#input${selectBox}`);
    if (selectBox == 'Rectangel') {
        const rectangle = new Polygon('rectangle', input[0].value, input[1].value);
        document.getElementById('Area').value = `${rectangle.calcA}`
        document.getElementById('Perimeter').value = `${rectangle.calcP}`

    } else if (selectBox == 'square') {
        const square = new Polygon('square', input[0].value);
        document.getElementById('Area').value = `${square.calcA}`
        document.getElementById('Perimeter').value = `${square.calcP}`

    } else if (selectBox == 'Circel') {
        const circel = new NonPolygon('circel', input[0].value);
        document.getElementById('Area').value = `${circel.calcA}`
        document.getElementById('Perimeter').value = `${circel.calcP}`

    } else if (selectBox == 'Cylandrical') {
        const Cylindr = new Cylindrical('Cylindr', input[0].value, input[1].value);
        document.getElementById('Area').value = `${Cylindr.calculatA}`
        document.getElementById('Perimeter').value = `${Cylindr.calculatP}`

    } else {
        console.log('error in button click')
    }
})


