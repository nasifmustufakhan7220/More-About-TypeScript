"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (strength) => {
    if (strength >= 0 && strength <= 20)
        return "Weak";
    else if (strength >= 21 && strength <= 50)
        return "Fair";
    else if (strength >= 51 && strength <= 80)
        return "Good";
    else if (strength >= 81 && strength <= 100)
        return "Excellent";
    else
        return "Invalid signal strength";
};
console.log(getSignalStatus(81));
//# sourceMappingURL=problem12.js.map