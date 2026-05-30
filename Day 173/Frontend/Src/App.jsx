import { Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import Phones from "./Pages/Phones.jsx";
import Panel from "./Pages/Panel.jsx";
import SignUp from "./Pages/SignUp.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Navbar from "./Components/Navbar.jsx";
import { useEffect, useState } from 'react';

function App() {
    const [phones, setPhones] = useState('');
    const [phoneName, setPhoneName] = useState('');
    const [phonePrice, setPhonePrice] = useState('');
    const [error, setError] = useState('');

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
    fetch(`${API_URL}/api/phones`)
        .then(res => res.json())
        .then(data => setPhones(data))
        .catch(err => console.error("შეცდომა:", err));
    }, [API_URL]);
};

const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
        </Routes>
        </>
    )
};

export default App;