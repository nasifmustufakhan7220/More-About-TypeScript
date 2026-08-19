type Gender = "Male" | "Female";
type Versity = "WUB" | "SMUT" | "DIU";

type Student ={
    name: string;
    roll: number;
    major: string;
    gpa?:number;
    gender?: Gender;
    versity?:Versity;
}


const student: Student={
    name: "Nasif",
    roll: 5198,
    major: "Science",
    gpa: 2.96,
    gender: "Male",
    versity: "WUB"
}
const student2: Student={
    name: "asifa",
    roll: 5199,
    major: "Science",
    gpa: 3.00,
    gender: "Female"
}

console.log(student.versity);
// console.log(student2.gender);