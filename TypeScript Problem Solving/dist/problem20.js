"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRentalFee = (vehical, minutes) => {
    if (vehical === "scooter") {
        if (minutes === 0)
            return 10;
        return 10 + (minutes * 2);
    }
    else if (vehical === "ebike") {
        if (minutes === 0)
            return 15;
        return 15 + (minutes * 3);
    }
    else if (vehical === "moped") {
        if (minutes === 0)
            return 25;
        return 25 + (minutes * 5);
    }
    ;
    return null;
};
console.log(calculateRentalFee("moped", 20));
//# sourceMappingURL=problem20.js.map