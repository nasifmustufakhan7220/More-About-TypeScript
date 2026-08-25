function getMonthName(monthNumber: number): string {
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let m:string | undefined;
  for(let i = 0; i < months.length; i++){
    switch (monthNumber) {
    case i + 1:
        m = months[i];
        break;
    default:
        break;
    }
  }
  if(m !== undefined){
    return m;
  }
  return "Invalid"
  
}

// console.log(getMonthName(10));

interface Count {
    even: number;
    odd: number;
    positive: number;
    negative: number;
}
const countNumberProperties = (numbers:number[]): Count =>{
    const count = {
        even: 0,
        negative: 0,
        odd: 0,
        positive: 0
    }
    for(const number of numbers){
        if(number > 0){
            if(number % 2 === 0) count.even++;
            else count.odd++
            count.positive++;
        }else if(number < 0){
            count.negative++;
            if(number % 2 === 0) count.even++;
            else{
                count.odd++;
            } 
        }else {
            count.even++;
        }
    }

    return count;
}

// console.log(countNumberProperties([2,4,6,8,10]));

function extractBodyContent(htmlString: string): string {
    let arr = htmlString.split("<body>")[1]?.split("</body>")[0];
    if(arr !== undefined){
        return arr;
    }

    return "Invalid";
}

// console.log(extractBodyContent("<!DOCTYPE html> <html> <body> <p>Hello world!</p> <div> <span>Nested content.</span> </div> </body> </html>"));

// function calculateRemainingMoney(totalMoney: number, cakeCost: number, donutCost: number): number {

//         const remainingMoney: number = totalMoney - cakeCost;
        
//         console.log("Remainging tk ===> ", remainingMoney);

//         const remaingMoneyAfterBoughtDonut:number = Math.floor(remainingMoney / donutCost) * donutCost;

//         console.log("Donut cost ===> ", remaingMoneyAfterBoughtDonut);

//         return remaingMoneyAfterBoughtDonut < 0 ? remaingMoneyAfterBoughtDonut:  Math.abs(remainingMoney - remaingMoneyAfterBoughtDonut);

// }


function calculateRemainingMoney(totalMoney: number, cakeCost: number, donutCost: number): number {

        const remainingMoney: number = totalMoney - cakeCost;
        
        

        const remaingMoneyAfterBoughtDonut:number = Math.floor(remainingMoney / donutCost) * donutCost;

        

        return remaingMoneyAfterBoughtDonut < 0 ? remaingMoneyAfterBoughtDonut:  Math.abs(remainingMoney - remaingMoneyAfterBoughtDonut);

}

console.log(calculateRemainingMoney(10, 20, 5));