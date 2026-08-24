"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
const calculateCartTotal = (products) => {
    if (products.length > 0) {
        const total = products.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
        return total;
    }
    return 0;
};
let result = calculateCartTotal(products);
console.log(result);
//# sourceMappingURL=problem4.js.map