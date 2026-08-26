"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, type) => {
    if (type.type === "deposit") {
        return balance + type.amount;
    }
    else {
        if (balance < type.amount)
            return balance;
        return balance - type.amount;
    }
};
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
//# sourceMappingURL=problem9.js.map