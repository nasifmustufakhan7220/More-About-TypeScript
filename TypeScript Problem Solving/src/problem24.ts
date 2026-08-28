interface Carts {
    name: string;
    price: number;
}

const calculateOrderTotal = (carts: Carts[]): number=>{

    const total = carts.reduce((acc,curr)=> acc+ curr.price,0);

    if(carts.length > 0) return total;
    return 0;
}

console.log(calculateOrderTotal([]));