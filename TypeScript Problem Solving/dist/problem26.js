"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    const activeEmployee = employees.filter(employee => employee.onDuty);
    if (employees.length === 0)
        return [];
    nzy;
    return activeEmployee;
};
console.log(findOnDutyEmployees([{ name: "Lima", onDuty: true }, { name: "Karim", onDuty: false }]));
//# sourceMappingURL=problem26.js.map