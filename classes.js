/*const color = 'teal';
// setting keys
const obj = {;
obj.color = '#3723FF';
obj[color] = '#3723FF';
obj[1 + 4 - 2 * 8] = '#3723FF';

//loop over objects
for (let [k, v] of Object.entries(obj)) {
    console.log(k, v);
}

//methods
const add = (x, y) => x + y,
const mult = (x, y) => x * y;
const square = (x) => x * x;
const power = (x, y) => x**y;

const myMath = {};
myMath.add = add;
myMath.mult = mult;

const myMath = {add, mult, square, power}
//or
const myMath = {
    add : function(x, y) {
        return x + y;
    },
    mult : (x, y) => {
        return x * y;
    }
};

//or
const myMath = {
    add(x,y) {
        return x+y;
    },
    square(x) {
        return x*x;
    }
};

//this method

const rightTriangle = {
    a : 9,
    b : 12,
    getArea : function() {
        return this.a * this.b/2;
    }
};
// or but you can only make one triangle "this is a object"
const rightTriangle = {
    a : 9,
    b : 12,
    getArea() {
        return this.a * this.b/2;
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** + this.b ** 2);
    }
};
// how to make multiple triangles "constructor functions" "this is a function"
function Triangle(a, b){
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return this.a * this.b/2;
    },
    this.getHypotenuse = function() {
        return Math.sqrt(this.a ** + this.b ** 2);
};
} //when called with new and passed in with values it works

//Prototypes
function Triangle(a, b){
    this.a = a;
    this.b = b;
    Triangle.prototype.getArea = function() {
        return this.a * this.b/2;
    },
    Triangle.prototype.getHypotenuse = function() {
        return Math.sqrt(this.a ** + this.b ** 2);
};
} 
Triangle(a, b);// returns undefined
// using the new operator:
const tri1 = new Triangle(3, 4);
tri1.getHypotenuse();//5
const tri2 = new Triangle(9, 12);
tri2.getHypotenuse();//15

//classes with constructors
class Triangle {
    constructor(a, b, c) {
        for (let side of [a, b, c]){
        if( !Number.isFinite(side) || side <= 0) {
            console.log('INVALID SIDE!!');
            throw new Error('Sides must be positive numbers');
        }
    }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        console.log('HELLO FROM TRIANGLE!');
    }
    display() {
        console.log(
            `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`
            );
    }
}

//adding methods

class Triangle {
    constructor(a, b, c) {
        for (let side of [a, b, c]){
        if( !Number.isFinite(side) || side <= 0) {
            console.log('INVALID SIDE!!');
            throw new Error('Sides must be positive numbers');
        }
    }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        console.log('HELLO FROM TRIANGLE!');
    }
    display() {
        console.log(
            `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`
            );
    }
    getArea() {
        const {a, b, c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    },
    isBig() {
        return this.getArea() > 50;
    }
}

const t1 = new Triangle(3, 4, 5);
const t2 = new Triangle(5, 9, 10);
const t3 = new Triangle(30, 40, 50);

t1.display();

//Extends

class Triangle {
    constructor(a, b, c) {
        for (let side of [a, b, c]){
        if( !Number.isFinite(side) || side <= 0) {
            console.log('INVALID SIDE!!');
            throw new Error('Sides must be positive numbers');
        }
    }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        console.log('HELLO FROM TRIANGLE!');
    }
    display() {
        console.log(
            `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`
            );
    }
    getArea() {
        const {a, b, c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    },
    isBig() {
        return this.getArea() > 50;
    }
}
// new changes
class RightTriangle extends Triangle {
    constructor(a, b, c) {
        if (a * a + b * b !== c * c) {
            throw new Error('Invalid C side for right triangle');
        }
        console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR');

        super(a, b, c);
        this.hypot = c;
    }
    isRightTriangle(){
        return true;
    }
    display() {
        return 'Right' + super.display();
    }
}
*/
//Car OO Challenge

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    isString() {
        return `The vehicle purchased was a ${this.make}, ${this.model} made the year of ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    honk() {
        return "Beep";
    }
    revEngine() {
        return "VROOM!!"
    }
}
class Garage {
    constructor(capacity) {
        this.vehicle = [];
        this.capacity = capacity;
    }

    add(yourVehicle) {
        if (!(yourVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!! "
        };
        if (this.vehicle.length >= this.capacity) {
            return "Sorry, we're full.";
        };
        this.vehicle.push(yourVehicle)
        return "Vehicle added!";

    }

}




