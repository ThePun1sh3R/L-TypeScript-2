let apples: number = 5;
apples = 10;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;

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
}

logNumber(10);