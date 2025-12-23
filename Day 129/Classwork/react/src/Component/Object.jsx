import React from "react";

const Object= () => {
    const titleStyle = {
        FontSize: '20px',
        Color: 'white',
        Border: 'none',
        BorderRadius: '5px'
    }

    const ButtonStyle = {
        Color: 'red',
        Border: 'none',
        BorderRadius: '15px'
    }

    return (
        <div style={titleStyle}>
            <h1 style={titleStyle}>Hello</h1>
            <button style={ButtonStyle}>Click Me</button>
        </div>
    )
}  


export default Object;