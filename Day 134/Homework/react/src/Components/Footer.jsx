import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const  Footer = () => {
    const { theme } = useContext(ThemeContext);

    return  <footer>Footer theme: {theme}</footer>;
};

export default Footer;