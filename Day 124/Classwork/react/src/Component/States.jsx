import React, { useContext, useState } from "react"

function States() {
    const [text, SeText] = useState("Hello")


    return (
        <div>
            <button onClick={() => SeText("New text")}></button>
        </div>
    )
};

export default States;