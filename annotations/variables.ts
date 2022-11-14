let apples: number = 5;
apples = 10;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

//classes
class Car {

}
let car: Car = new Car();

let point: {x: number ; y: number } = {
    x: 10,
    y: 15
}
const logNumber: (i:number) => void = (i: number) => {
    console.log(i);
};

logNumber(10);

//when to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) when we declare a variable on one line 
// and initializate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variabl whose type cannot be inferred correctly

let numbers = [-10 , -1 , 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    } else {
        numberAboveZero = false;
    }
}
console.log(numberAboveZero);

// funtions 
const add = (a: number , b: number) => {
    return a + b;
};

console.log(add(10,30));

