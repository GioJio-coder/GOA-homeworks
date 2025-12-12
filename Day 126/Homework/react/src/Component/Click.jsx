import React, { useState, useEffect } from "react";

export default function Click() {
    const [count, setCount] = useState(0);

useEffect(() => {
    function handleClick() {
        setCount((prev) => prev + 1);
    }

    document.addEventListener("click", handleClick);

    return () => {
        document.removeEventListener("click", handleClick);
    };
}); 

return (
    <div>
        <h2>Total document clicks: {count}</h2>
    </div>
);
}