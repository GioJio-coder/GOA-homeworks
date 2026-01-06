function Navbar() {
    return (
        <nav className="w-full bg-blue-500">
            <div className="max mx-auto px-6 h-14 flex items-center justify-between">
            
                <div className="flex items-center gap-2 text-white">
                    <div className="h-8 bg-white text-blue-500 flex items-center justify-center rounded">
                    </div>
                </div>

                <ul className="flex items-center gap-8 text-white">
                    <li className="cursor-pointer hover:underline">Components</li>
                    <li className="cursor-pointer hover:underline">Templates</li>
                    <li className="cursor-pointer hover:underline">Contact Us</li>
                </ul>

            </div>
        </nav>
    );
    }

export default Navbar;
