import { useState, useEffect } from "react";

function App() {
    const [ count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1 )
}, 500);

    return () => clearInterval(interval)
    }, []);

return (
<div>
    <p>Count {count}</p>
</div>
);
}

export default App;