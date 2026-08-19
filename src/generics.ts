function getValue<T>(value: T): T{
    return value;
}

const result = getValue<string>("Hello");

const result1 = getValue<number>(100);

const result2 = getValue<boolean>(true);
// console.log(result2);
const user = getValue({
    name: "Nasif",
    age: 24
});

//Geberic with an array

//Option 1: 
const getFirst1= <T>(items:T[]): T | undefined =>{
    return items[0];
}

//Option 2 & 3 with(Non-null assertion -->!):
const getFirst2 = <T>(num: T[]): T =>{
    if(num.length === 0){
        throw new Error("Array is empty");
    }

    return num[0]!;
}

const result3 = getFirst1<number>([10, 20, 30]);
// const result4 = getFirst2<number>([]);

const result5 = getFirst1<string>(["amina", "rahim"]);

// console.log(result5);

//Generic with two types

function pair<T, U>(first: T, second: U){
    return [first, second];
}

const result6 = pair("Nasif", 24);
const result7 = pair(true, "active");

// console.log(result7);


// Generics with a type alias

type Box<T> = {
    value: T;
}

const numberBox: Box<number> ={
    value: 100
}

const stringBox: Box <string> = {
    value: "Nasif"
}

// Generics with interfaces

// This is especially useful when you start working with APIs.

interface Response<T> {
    data: T;
    success: boolean;
}

const userResponse: Response<string> = {
    data: "Nasif",
    success: true
}

const ageResponse: Response<number> = {
    data: 24,
    success: true
}

interface Product {
    name: string;
    price: number;
}

const product: Response<Product> = {
    data:{
        name: "Laptop",
        price: 80000
    },
    success: true
}