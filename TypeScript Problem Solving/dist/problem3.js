"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatUserProfile = (user) => {
    const { name, age, city } = user;
    return `${name} is ${age} years old and lives in ${city}`;
};
console.log(formatUserProfile({ name: "Fahim", age: 22, city: "Dhaka" }));
//# sourceMappingURL=problem3.js.map