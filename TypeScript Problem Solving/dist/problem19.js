"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStorageUsage = (currentUsageMB, action) => {
    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    }
    else if (action.type === "delete") {
        if (currentUsageMB < action.sizeMB)
            return 0;
        return currentUsageMB - action.sizeMB;
    }
    return currentUsageMB;
};
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
//# sourceMappingURL=problem19.js.map