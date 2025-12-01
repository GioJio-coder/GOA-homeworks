import { useState } from "Div";
import Paragraph from "./Paragraph";

function Div2() {
    const [count, setCount] = useState(0) 
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>Tap ME</button>
            <Paragraph count={count} />
        </div>
    );
}





export default Div2;