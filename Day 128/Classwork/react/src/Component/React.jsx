import { useEffect,  useState } from "react";

function react() {
    const [data, setData] = useState([])

    async function fethcData(apiLink) {
        try {
            const response = await fetch(apiLink)
            const jsonData = await response.json();
            setData(jsonData)
        } catch (error) {
            console.error("This is error", error)
        }
    }

    useEffect(function () {
        fethcData("https://api.openweathermap.org/data/2.5/weather?q=$");
        console.log("მიღებული მონაცემები", data);
    }, [data])


    return (
        <div>
            <h1>API</h1>
            <p>Loading</p>
        </div>
    )
}

export default react;