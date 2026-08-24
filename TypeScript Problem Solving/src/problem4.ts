interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
]

const calculateCartTotal = (products: Product[]): number=>{

    if(products.length > 0){
        const total = products.reduce((acc, curr): number=>{
            return acc + curr.price;
        }, 0);
        return total;
    }

    return 0;
}

let result:number = calculateCartTotal(products);
console.log(result);