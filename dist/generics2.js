"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useState = (initialValue) => {
    let value = initialValue;
    const setValue = (newValue) => {
        value = newValue;
    };
    return [value, setValue];
};
const [counter, setCounter] = useState(0);
const [name, setName] = useState("Nasif");
const user = {
    name: "Nasif",
    age: 24
};
const [userDetails] = useState(user);
// console.log(userDetails);
//# sourceMappingURL=generics2.js.map