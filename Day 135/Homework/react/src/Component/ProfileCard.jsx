export default function ProfileCard() {
    return (
        <div className="flex items-center justify-center min-screen">
            <div className="w-80 bg-white rounded-2xl shadow-xl text-center">
                <div className=" relative flex justify-center">
                </div>
        
                <div>
                    <h1 className="font-bold text-lg">Victor Crest</h1>
                    <p className="text-gray-400 text-sm">London</p>
                </div>

                <div className="flex justify-around  text-center">
                    <div><a className="block">80K</a></div>
                    <div><a className="block">803K</a></div>
                    <div><a className="block">1.4K</a></div>
                </div>
            </div>
        </div>
    );
}