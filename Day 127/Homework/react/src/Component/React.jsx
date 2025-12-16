import { useEffect, useState } from "react";

export default function react() {
    const [city, setCity] = useState("");

    const API_KEY = "Your_API_KEY_is here";

async function fetchWeather(cityName) {
    if (!cityName) return; 

    try {
        const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );

        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

    useEffect(() => {
    fetchWeather(city);
}, [city]);

return (
    <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
);
}