import { useState, useEffect } from "react";

export default function Count() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const handleKeyDown = () => {
            setCount(prev => prev + 1)
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("KeyDown", handleKeyDown)
        }
    });

    return (
        <div>
            <p>Count {count}</p>
        </div>
    )
}



