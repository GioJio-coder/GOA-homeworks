import { Car, Truck, Star } from "react";

export default function Categories() {
    return (
        <div className="min-screen flex items-center justify-center bg-gray-100">
            <div>
                <div className="bg-orange-500 text-white flex justify-between">
                    <div>
                        <Car className="w-10 h-10  opacity-80" />
                        <h2 className="text-3xl font-bold">SEDANS</h2>
                        <p className="text-sm opacity-90">Affordable and fuel efficient for city rides.</p>
                    </div>
                    <button className=" bg-white text-orange-500 px-6  rounded-full font-semibold">Learn More</button>
                </div>

                    <div className="bg-teal-600 text-white  flex  justify-between">
                        <div>
                            <Truck className="w-10 h-10  opacity-80" />
                            <h2 className="text-3xl font-bold">SUVS</h2>
                            <p className="text-sm opacity-90">Spacious and powerful for family adventures.</p>
                        </div>
                        <button className=" bg-white text-teal-600 px-6 rounded-full font-semibold">Learn More</button>
                    </div>

                    <div className="bg-emerald-900 text-white flex flex-col justify-between">
                        <div>
                            <Star className="w-10 h-10  opacity-80" />
                            <h2 className="text-3xl font-bold">LUXURY</h2>
                            <p className="text-sm opacity-90">Premium comfort and style.</p>
                        </div>
                    <button className=" bg-white text-emerald-900 px-6  rounded-full font-semibold">Learn More</button>
                </div>
            </div>
        </div>
    );
}
