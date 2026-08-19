interface Student{
    name: string;
    age: number;
    course: string;
}


// Interface can contain nested objects
// You can have an interface inside another interface.

interface Address {
    city : string;
    country: string;
}

interface Student {
    name: string;
    age: number;
    address: Address;
}

const student: Student = {
    name: "Nasif",
    age: 24,
    course: "CSE",
    address:{
        city: "Muktarpara",
        country: "BD",
    }
}

// Interface can describe an method(function) inside an object

interface Calculator {
    add(a: number, b: number): number;
}

const calculator: Calculator = {
    add(a,b){
        return a + b;
    }
}


// Interface can describe function

interface AddFunction {
    (a: number, b: number): number;
}


const add: AddFunction = function(a, b){
    return a + b;
}


// Arrow function
interface Sum {
    (a: number, b: number):number;
}

const total: Sum = (a, b) =>{
    return a + b;
}


// Reuseable with interface

interface MathOparation {
    (a: number, b: number): number;
}

const summation: MathOparation = (a, b)=>{
    return a + b;
}

const subtraction: MathOparation = (a, b)=>{
    return a - b;
}

const multiply: MathOparation = (a, b)=>{
    return a * b;
}

const division: MathOparation = (a, b)=>{
    return a / b;
}

const remaining: MathOparation = (a, b)=>{
    return a % b;
}

