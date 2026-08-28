type Weather = "sunny" | "rainy" | "cloudy";

const getWeatherAdvice = (weather: Weather): string =>{
    if(weather === "sunny") return "Wear sunscreen";
    else if(weather === "rainy") return "Carry an umbrella";
    else return "Bring a light jacket";
}

console.log(getWeatherAdvice("rainy"));