import { useState } from "react";

function Colors() {
    const colors = [
        "red",
        "Green",
        "Blue",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Black",
        "white",
        "Brown"
    ]


    const [ arrIndex, setArrIndex ] = useState(0)

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        setArrIndex(randomIndex)
    }

    return (
        <div>
            <p>
                {colors[arrIndex]}
            </p>
            <button onClick={handleClick}>Random Color</button>
        </div>
    )
};

export default Colors;