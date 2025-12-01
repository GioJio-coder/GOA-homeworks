import { useState } from "react";

function Info() {
    const [text, setText] = useState("");

const handleChange = (event) => {
        setText(event.target.value);
};

return (
    <div>
        <form>
            <input type="text" onChange={handleChange} />
        </form>
        <p>{text}</p>
    </div>
);
}

export default Info;