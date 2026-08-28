"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklySteps = (steps) => {
    const total = steps.reduce((acc, curr) => acc + curr, 0);
    if (steps.length !== 0)
        return total;
    return 0;
};
console.log(calculateWeeklySteps([]));
//# sourceMappingURL=problem23.js.map