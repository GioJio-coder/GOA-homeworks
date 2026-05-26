import { createContext, useContext, useEffect, useState } from "react";

const PhonesContext = createContext();
export const usePhones = () => useContext(PhonesContext);

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const PhonesProvider = ({ children }) => {
    const [phones, setPhones] = useState([]);

    const getPhones = async () => {
        try {
        const res = await fetch(`${API_URL}/phones`);

        if (!res.ok) {
            throw new Error("Something went wrong!");
        }

        const result = await res.json();
        setPhones(result);
        } catch (err) {
        console.log(err);
        }
    };

    useEffect(() => {
        getPhones();
    }, []);

    return (
        <PhonesContext.Provider value={{ phones }}>
        {children}
        </PhonesContext.Provider>
    );
};