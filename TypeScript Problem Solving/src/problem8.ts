

interface GeneralPatient  {
    name: string;
    age: number;
    type: "general";
    
}

interface EmergencyPatient {
    name: string;
    age: number;
    type: "emergency";
    emergencyLevel: 1 | 2 | 3;
}


const getPatientStatus =(patient: GeneralPatient | EmergencyPatient): string=>{

    if(patient.type === "general") return "General patient";
    else {
        if(patient.emergencyLevel === 1) return "Critical";
        else if(patient.emergencyLevel === 2) return "Serious";
    }

    return "Moderate";
}

console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 3 }));