"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    if (role === "admin")
        return true;
    else if (role === "editor")
        return true;
    else
        return false;
};
console.log(canEdit("viewer"));
//# sourceMappingURL=problem6.js.map