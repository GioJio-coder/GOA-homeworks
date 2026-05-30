import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const signUser = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/auth/signUp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "რეგისტრაცია ჩაიშალა");
            }

            if (result.user) setUser(result.user);

            navigate("/logIn");
        } catch (err) {
            console.error(err.message);
        }
    };

    const logUser = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/auth/logIn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "ავტორიზაცია ჩაიშალა");
            }

            setUser(result.user || result);

            navigate("/");
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, signUser, logUser }}>
            {children}
        </AuthContext.Provider>
    );
};