const calculateWeeklySteps = (steps: number[]): number =>{

    const total = steps.reduce((acc, curr)=> acc + curr,0);

    if(steps.length !== 0) return total;
    return 0
}

console.log(calculateWeeklySteps([]));