"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(value) {
    return value;
}
const result = getValue("Hello");
const result1 = getValue(100);
const result2 = getValue(true);
// console.log(result2);
const user = getValue({
    name: "Nasif",
    age: 24
});
//Geberic with an array
//Option 1: 
const getFirst1 = (items) => {
    return items[0];
};
//Option 2 & 3 with(Non-null assertion -->!):
const getFirst2 = (num) => {
    if (num.length === 0) {
        throw new Error("Array is empty");
    }
    return num[0];
};
const result3 = getFirst1([10, 20, 30]);
// const result4 = getFirst2<number>([]);
const result5 = getFirst1(["amina", "rahim"]);
// console.log(result5);
//Generic with two types
function pair(first, second) {
    return [first, second];
}
const result6 = pair("Nasif", 24);
const result7 = pair(true, "active");
const numberBox = {
    value: 100
};
const stringBox = {
    value: "Nasif"
};
const userResponse = {
    data: "Nasif",
    success: true
};
const ageResponse = {
    data: 24,
    success: true
};
const product = {
    data: {
        name: "Laptop",
        price: 80000
    },
    success: true
};
//# sourceMappingURL=generics.js.map