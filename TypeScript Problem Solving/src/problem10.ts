interface Product{
    name: string;
    price: number;
}


const calculateCartTotal =<T extends Product> (products: T[]): number=>{
    const total = products.reduce((acc,curr)=>acc + curr.price ,0);

    return total;
}