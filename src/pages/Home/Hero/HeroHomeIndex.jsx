const HeroHomeIndex = () => {
    return (
        <section className="h-[490px] flex justify-between gap-5 mt-8">
            <div className="h-full w-[60%] bg-red-300 rounded-[10px] relative overflow-hidden">
                <img src='https://placehold.co/600x400'alt='image' className="w-full h-full object-cover absolute z-0"/>
                <div className="absolute inset-0 bg-black/60 z-10 "></div>
                <div className="absolute bottom-[10%] left-[5%] z-20 text-white right-[5%]">
                    <h1 className="font-bold text-[30px]">Welcome to Ekdada Gaupalika</h1>
                    <p className="font-medium text-[13px]">Building a sustainable and prosperous future for our community through transparent governance and inclusive development.
                    </p>
                </div>

            </div>
            <div className="h-full w-[40%] rounded-[10px] p-7 shadow-lg">
                <div className="p-2 border-b-2 border-b-MainRed">
                    <h1 className="font-extrabold text-[20px] text-MainRed">News & Update</h1>
                </div>

                <div className="mt-5 max-[1216px]:mt-3">
                    {
                        [...Array(4)].map((_,index) => {
                            return (
                                <div key={index} className="py-5 max-[1216px]:py-3 border-b-1 border-b-black/70">
                                    <h2 className="font-bold text-[15px]">New development projects announced for 2025</h2>
                                    <p className="font-medium text-[13px]">June 16, 2025</p>
                                </div>
                            
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
export default HeroHomeIndex;