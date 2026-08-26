"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === "general")
        return "General patient";
    else {
        if (patient.emergencyLevel === 1)
            return "Critical";
        else if (patient.emergencyLevel === 2)
            return "Serious";
    }
    return "Moderate";
};
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 3 }));
//# sourceMappingURL=problem8.js.map