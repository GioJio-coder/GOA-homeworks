import React from "react";

function Header() {
    return (
        <header className="bg-gray-900 text-white  flex justify-between items-center">
            <h1 className="font-bold">My Mini Project</h1>
            <nav>
                <a href="#" className="hover:text-gray-200">Home</a>
                <a href="#" className="hover:text-gray-200">About</a>
                <a href="#" className="hover:text-gray-200">Contact</a>
            </nav>
        </header>
    );
}

export default Header;