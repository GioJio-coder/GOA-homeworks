import { createContext, useState } from "react";

export const MyContext = createContext();

const Mycontext2 = ({ children }) => {
    const [value, setValue] = useState("Hello Context");

    return (
        <MyContext.Provider value={{ value, setValue }}>
        {children}
        </MyContext.Provider>
    );
};

export default Mycontext2;