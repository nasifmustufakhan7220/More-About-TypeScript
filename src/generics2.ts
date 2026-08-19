const useState = <T>(initialValue: T): [T, (newValue: T)=> void]=>{
    let value = initialValue;

    const setValue = (newValue: T)=>{
       value = newValue;
    }

    return [value, setValue];
}

const [counter, setCounter] = useState<number>(0);
const[name, setName]=useState<string>("Nasif");

interface User<T, N>{
    name: T;
    age: N;
}

const user: User<string, number>={
    name: "Nasif",
    age: 24
}

const[userDetails]=useState<User<string,number>>(user);

// console.log(userDetails);