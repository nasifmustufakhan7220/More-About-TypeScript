interface Student {
    name: string,
    marks: number[];
}

const student = {
    name: "Nabil",
    marks: [30, 35, 40, 25]
}


const getStudentResult = (student: Student)=>{
    interface Students {
        name: string;
        average: number,
        result: string;
    }

    const students: Students = {
        name: "",
        average: 0,
        result: ""
    }
    
    if(student.marks.length < 0){
        return students;
    }

    const total:number = student.marks.reduce((acc, curr)=>acc+ curr,0);

    const averageMarks: number = total / student.marks.length;

    students['name'] = students.name;
    students['average'] = averageMarks;
    

    if(averageMarks>= 40){
        students['result'] = "Passed";
    }else{
        students['result'] = "Failed";
    }

    return students;

}

console.log(getStudentResult(student));