
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState();

    const increase = () => setCount(c => c + 1);
    const decrease = () => setCount(c => c - 1);
    const reset = () => setCount();

    return { count, increase, decrease, reset };
}

export default Counter;
