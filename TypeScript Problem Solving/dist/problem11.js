"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAgeRatingAccess = (age) => {
    if (age > 0 && age < 7)
        return "E(Everyone)";
    else if (age >= 7 && age <= 12)
        return "E10+ (Everyone 10+)";
    else if (age >= 13 && age <= 16)
        return "T (Teen)";
    else
        return "M (Mature)";
};
console.log(getAgeRatingAccess(20));
//# sourceMappingURL=problem11.js.map