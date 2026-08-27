"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canAccessOfflineMode = (tier) => {
    if (tier === "Free")
        return false;
    else if (tier === "Pro")
        return true;
    else
        return true;
};
console.log(canAccessOfflineMode("Premium"));
//# sourceMappingURL=problem16.js.map