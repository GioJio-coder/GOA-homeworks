import { useState, useEffect } from "react";

function use() {

useEffect(() => {
    async function fetchData() {
        const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("მიღებული მონაცემი სერვერიდან!");
        }, 1000);
    });
    }

    fetchData(); 
}, ); 

return (
    <div>
        <h2>Async Example</h2>
    </div>
);
}


const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
};

return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>
        Click me
    </button>
    </div>
);


export default use;