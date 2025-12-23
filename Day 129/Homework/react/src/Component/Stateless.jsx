import React from "react";

const Stateless = () => {
    const containerStyle = {
        display: "flex",
        padding: "20px",
        backgroundColor: "white",
};

    const cardStyle = {
        backgroundColor: "white",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

    const titleStyle = {
        color: "#333",
        fontSize: "18px",
        marginBottom: "10px",
};

    return (
        <div style={containerStyle}>
        <div style={cardStyle}>
            <h3 style={titleStyle}>Card 1</h3>
        </div>

        <div style={cardStyle}>
            <h3 style={titleStyle}>Card 2</h3>
        </div>

        <div style={cardStyle}>
            <h3 style={titleStyle}>Card 3</h3>
        </div>
        </div>
    );
};

export default Stateless;;
