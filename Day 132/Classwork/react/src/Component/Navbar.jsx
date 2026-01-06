const Navbar = () => {
    return (
        <nav classname="w-full">
            <div classname="px-6 mx-auto">
                <div classname="flex items-center justify-between h-10 text-white">

                    <div classname="text-xl">Logo</div>
                    <ul classname="items-center gap-8">
                        <li classname="hover:text-black">Home</li>
                        <li classname="hover:text-black">Catagory</li>
                        <li classname="hover:text-black">Collections</li>
                        <li classname="hover:text-black">Contact us</li>
                    </ul>

                    <div classname="flex items-center gap-5">
                        <button classname="hover:text-black">Click</button>

                        <button classname= "relative hover:text-black">Click for Shop</button>

                        <button classname="hover:text-black">click for Contact</button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;