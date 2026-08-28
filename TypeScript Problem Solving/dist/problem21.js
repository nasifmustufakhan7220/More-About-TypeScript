"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (strength) => {
    if (strength >= 0 && strength <= 25)
        return "Poor";
    else if (strength >= 26 && strength <= 55)
        return "Fair";
    else if (strength >= 56 && strength <= 85)
        return "Good";
    else if (strength >= 86 && strength <= 100)
        return "Excellent";
    return "Invalid";
};
console.log(getSignalStatus(95));
//# sourceMappingURL=problem21.js.map