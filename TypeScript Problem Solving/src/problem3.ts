interface User {
    name: string;
    age: number;
    city: string;
}

interface FormatUserProfile {
    (a:User):string
}

const formatUserProfile: FormatUserProfile = (user)=>{
    const{name, age, city}=user;

    return `${name} is ${age} years old and lives in ${city}`;
}

console.log(formatUserProfile({name: "Fahim", age: 22, city: "Dhaka"}));