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

//Interfaces can be extended+
interface Person {
    name: string;
    age: number;
}
//Then you want a student to have everything a person has, plus course.

interface Students extends Person {
    course: string;
}

const student1: Students ={
    name: "Nasif",
    age: 24,
    course: "CSE"
}

//Multiple interfaces can be extended

interface Employee {
    salary: number;
}

interface Manager extends Person, Employee {
    department: string;
}

const manager: Manager = {
    name: "Nasif",
    age: 24,
    salary: 50000,
    department: "IT"
}

//Interface and arrays of objects
// This is where interfaces become really useful.

interface USer {
    name: string;
    age: number;
    active: boolean;
}

const users: USer[] = [
    {
        name: "Nasif",
        age: 24,
        active: true
    },
    {
        name: "Amina",
        age: 22,
        active: false
    }
]

