// the value of this changes depending on how a function is executed!! 
// whatever is to the left is 'this' and if you don't have anything to the they that will be the windows browser!!
/*const cat = {
    name : 'blue',
    breed : 'Scottish Fold',
    dance : function(dance) {
        console.log('THIS IS:', this);
        console.log(`meow, I am a ${this.breed} and I like to ${dance}`);
    }
};

cat.dance('salsa');
const bluesDance = cat.dance;
bluesDance('salsa');

function whatIsThis() {
    console.log('this =', this);
}

const myObj = {
    func : whatIsThis,
    color : 'purple'
};

myObj.func();
window.whatIsThis();

//strict mode (changes value of 'this')

'use strict';
const cat = {
    name : 'blue',
    breed : 'Scottish Fold',
    dance : function(dance) {
        console.log('THIS IS:', this);
        console.log(`meow, I am a ${this.breed} and I like to ${dance}`);
    }
};

class cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    dance(danceType) {
        console.log('this is:', this);
        console.log(`meow, I am a ${this.breed} and I like to ${danceType}`);
    }
}
cat.dance('salsa');
const bluesDance = cat.dance;
bluesDance('salsa');

// call
const cat = {
    name : 'blue',
    breed : 'Scottish Fold',
    dance : function(dance) {
        console.log('THIS IS:', this);
        console.log(`meow, I am a ${this.breed} and I like to ${dance}`);
    }
},
play : function(...toys) {
    for (let toy of toys) {
        console.log(`${this.name} plays with ${toy} `);
    }
}
const dog = {
    breed : 'Black Lab',
    name : 'Elton'
};

cat.play.call(dog, 'bone', 'my cat');

//bind (call and bind set the value of 'this') on arguments
function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

const applyCATax = applySalesTax.bind(null, 0.0725);
const applyTXTax = applySalesTax.bind(null, 0.0625);

const bobsMembership = {
    name : 'Bob',
    total : 250
};
const jillsMembership = {
    name : 'Jill',
    total : 899
};
    function collectMonthlyFee(fee) {
        const remaining = this.total - fee;
        this.total = remaining;
        return this.name + ' remaining balance:' + remaining;
    }

    const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
    const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);

    //binding callbacks
    const blue = {
        name : 'blue',
        breed : 'Scottish Fold',
        dance : function(dance) {
            console.log('THIS IS:', this);
            console.log(`meow, I am a ${this.breed} and I like to ${dance}`);
        }
    },
    play : function(...toys) {
        for (let toy of toys) {
            console.log(`${this.name} plays with ${toy} `);
        }
    };

    document
    .querySelector('#btn-1')
    .addEventListener('click', blue.greet.bind(blue));

    const btnA = document.querySelector('#a');
    const btnB = document.querySelector('#b');
    const btnC = document.querySelector('#c');

    function popUp(msg) {
        alert('Secret message is' + msg);
    }
//old way
    btnA.addEventListener('click', function() {
        popUp('Button A says hi!');
    });
    btnB.addEventListener('click', function() {
        popUp('Button B says hi!');
    });
    btnC.addEventListener('click', function() {
        popUp('Button C says hi!');
    });
    // using bind
    btnA.addEventListener('click', popUp.bind(null, 'Button A Says Hi'));
    btnB.addEventListener('click', popUp.bind(null, 'Button B Says Hi'));
    btnC.addEventListener('click', popUp.bind(null, 'Button C Says Hi'));

//arrow functions and this

const greeter = {
    msg   : 'I like chickenz',
    sayHi : function() {
        alert(this.msg);
    },

waitAndGreet : function(delay) {
    setTimeout(() => {
alert(this.msg);
    }, delay);
}
};*/

//Connect four OO
document.addEventListener('DOMContentLoaded'), () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayPlayerTurn = document.querySelector('#player-turn')
    let playerTurn = 1

    const winningPoints = [
        [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]
    function checkboard() {
        for (let z = 0; z <winningpoints.length; z++) {
            const square1 = squares[winningPoints[z][0]]
            const square2 = squares[winningPoints[z][1]]
            const square3 = squares[winningPoints[z][2]]
            const square4 = squares[winningPoints[z][3]]
        }
        if (
        square1.classList.contains('player-one') && 
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')
        )
        {
            result.innerHTML = 'player One Wins!'
        }
        if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two') 
        ) {
            result.innerHTML = 'Player Two Wins!'
        }
    }
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
                if(playerTurn == 1) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    playerTurn = 2
                    displayPlayerTurn.innerHTML = playerTurn
                }
                else if (playerTurn == 2) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    playerTurn = 1
                    displayPlayerTurn.innerHTML = playerTurn
                }
            }
                else alert('invalid move!')
                checkBoard()
        }
    }
}