"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    name: "Nabil",
    marks: [30, 35, 40, 25]
};
const getStudentResult = (student) => {
    const students = {
        name: "",
        average: 0,
        result: ""
    };
    if (student.marks.length < 0) {
        return students;
    }
    const total = student.marks.reduce((acc, curr) => acc + curr, 0);
    const averageMarks = total / student.marks.length;
    students['name'] = student.name;
    students['average'] = averageMarks;
    if (averageMarks >= 40) {
        students['result'] = "Passed";
    }
    else {
        students['result'] = "Failed";
    }
    return students;
};
console.log(getStudentResult(student));
//# sourceMappingURL=problem5.js.map