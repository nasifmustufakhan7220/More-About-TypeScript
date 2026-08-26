interface Deposite {
    type: "deposit";
    amount: number;
}

interface Withdraw {
    type: "withdraw";
    amount: number;
}

const processTransaction = (balance: number,type: Deposite | Withdraw): number=>{
    if(type.type === "deposit"){
        return balance + type.amount;
    }else {
        if(balance < type.amount) return balance;
        return balance - type.amount;
    }
}

console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));