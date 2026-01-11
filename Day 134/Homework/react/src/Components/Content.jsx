import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Content = () => {
    const { theme } = useContext(ThemeContext);

    const Styles = {
        backgroundColor: theme === "light" ? "#212121" : "#FFFFFF",
        color: theme ===  "light" ? "#000" : "#fff",
    };

    return (
        <div style={Styles}>
            Change Content
        </div>
    );
};

export default Content;