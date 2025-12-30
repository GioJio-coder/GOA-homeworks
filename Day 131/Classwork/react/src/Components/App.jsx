export default function App() {
    return (
        <section
        classname="h-screen relative">
        <div classname="absolute"></div>
        <nav classname="relative flex items-center justify-between text-white px-8">
            <div classname="font-bold">Logo</div>
            <ul>
                <li classname="hover:text-red-500">home</li>
                <li classname="hover:text-red-500">About</li>
                <li classname="hover:text-red-500">Services</li>
                <li classname="hover:text-red-500">Contact</li>
            </ul>
        </nav>

        <div classname="relative flex h-full items-center  justify-center"></div>
        </section>
    )
}