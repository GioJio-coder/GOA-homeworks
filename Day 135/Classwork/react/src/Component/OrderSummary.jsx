import React from "react";

export default function OrderSummary() {
    return (
        <div className="min-h-screen flex items-center justify-center
        px-4">
            <div className="w-full max-w-sm rounded-2xl bg-white ">
                <div className="justify-center"></div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-700">Order Summary</h1>
                    <p className="text-gray-500">You can now listen to millions of songs, audiobooks,  and podcasts on any device anywhere you like!</p>
                    <div classnmae="flex items-center justify-between bg-gray-100 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 flex items-center justify-center rounded-full"></div>
                            <div>
                                <p className="text-gray-800">Annual Plan</p>
                                <p className="text-sm text-gray-500">$59.99/year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}