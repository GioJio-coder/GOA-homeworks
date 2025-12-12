import React, { useState, useEffect } from "react";

export default function Window() {
    const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
    function handleResize() {
        setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
    window.removeEventListener("resize", handleResize);
    };
}); 

return (
    <div>
        <h2>Current window width: {width}px</h2>
    </div>
);
}


