function getValue<T>(value: T): T{
    return value;
}

const result = getValue<string>("Hello");
console.log(result);