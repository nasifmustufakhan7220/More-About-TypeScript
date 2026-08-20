"use strict";
// interface GetTicketPrice {
//     (a:number):number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const getTicketPrice: GetTicketPrice=(age)=>{
//     if(age < 5){
//         return 0;
//     }else if(age>= 5 && age <= 12){
//         return 100;
//     }else if(age>= 13 && age <= 59){
//         return 200
//     }
//     return 120;
// }
const getTicketPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }
    return 120;
};
const result = getTicketPrice(2);
console.log(result);
//# sourceMappingURL=problem1.js.map