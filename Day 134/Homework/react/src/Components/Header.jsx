import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <header>
            <h1>მიმდინარე თემა: {theme}</h1>
            <ThemeToggle />
        </header>
    );
};

export default Header;
