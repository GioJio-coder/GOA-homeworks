import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Info = () => {
    const { theme, setTheme} = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    }

    const Button = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div style={styles}>
            <h1>H1</h1>
            <p>First Paragraph</p>

            <h2>H2</h2>
            <p>Second Paragraph</p>

            <button onClick={Button}>Change Theme</button>
        </div>
    );
};

export default Info;