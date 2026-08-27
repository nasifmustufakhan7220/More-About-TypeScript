"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalListeningTime = (tracks) => {
    const total = tracks.reduce((acc, curr) => acc + curr.minutes, 0);
    if (tracks.length !== 0) {
        return total;
    }
    return 0;
};
console.log(calculateTotalListeningTime([]));
//# sourceMappingURL=problem14.js.map