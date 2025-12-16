import { useEffect } from "react";

function API() {
    const fetchData= async (apiLink) => {
        try {
            const response = await fetch(apiLink)
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error("It's an error", error)
        }
    }

    useEffect(() => {
        fetchData("https://www.accuweather.com/en/ge/tbilisi/171705/weather-forecast/171705")}, []);

        return (
            <div>
                <h1>HI</h1>
            </div>
        )
}

export default API