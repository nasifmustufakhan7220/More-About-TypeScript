"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateOrderTotal = (carts) => {
    const total = carts.reduce((acc, curr) => acc + curr.price, 0);
    if (carts.length > 0)
        return total;
    return 0;
};
console.log(calculateOrderTotal([]));
//# sourceMappingURL=problem24.js.map