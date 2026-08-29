interface Employees {
    name: string;
    onDuty: boolean;
}

const findOnDutyEmployees = (employees: Employees[]): Employees[]=>{

    const activeEmployee = employees.filter(employee => employee.onDuty);

    if(employees.length === 0) return [];
    return activeEmployee;
}

console.log(findOnDutyEmployees([{name:"Lima",onDuty:true},{name:"Karim",onDuty:false}]));