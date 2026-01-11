import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
    const { toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Change Theme
        </button>
    )
}

export default ThemeToggle;