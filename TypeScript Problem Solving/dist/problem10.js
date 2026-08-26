"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const total = products.reduce((acc, curr) => acc + curr.price, 0);
    return total;
};
//# sourceMappingURL=problem10.js.map