const HeroHomeIndex = () => {
    return (
        <section className="h-[490px] max-md:h-auto flex justify-between gap-5 mt-8 max-md:flex-col max-md:gap-1 max-sm:gap-3 max-lg:mt-5 max-sm:mt-3">
            <div className="h-full w-[60%] max-md:w-full max-md:h-[300px] bg-red-300 rounded-[10px] relative overflow-hidden">
                <img src='https://placehold.co/600x400' alt='image' className="w-full h-full object-cover absolute z-0" />
                <div className="absolute inset-0 bg-black/60 z-10 "></div>
                <div className="absolute bottom-[10%] left-[5%] z-20 text-white right-[5%]">
                    <h1 className="font-bold text-[30px] max-[1216px]:text-[27px] max-md:text-[24px] max-sm:text-[18px]  max-[1216px]:leading-8">Welcome to Ekdada Gaupalika</h1>
                    <p className="font-medium text-[13px] max-[1216px]:text-xs max-md:text-[11px] max-[1216px]:mt-4 max-sm:mt-3">Building a sustainable and prosperous future for our community through transparent governance and inclusive development.
                    </p>
                </div>

            </div>
            <div className="h-full w-[40%] max-md:w-full rounded-[10px] p-7 shadow-lg max-sm:p-4">
                <div className="p-2 border-b-2 max-sm:p-1 border-b-MainRed">
                    <h1 className="font-extrabold text-[20px] text-MainRed max-sm:text-[18px]">News & Update</h1>
                </div>

                <div className="mt-5 max-[1216px]:mt-3">
                    {
                        [...Array(4)].map((_, index) => {
                            return (
                                <div key={index} className="py-5 max-[1216px]:py-3 border-b-1 border-b-black/70">
                                    <h2 className="font-bold text-[15px] max-[1216px]:text-[13px] max-sm:text-xs">New development projects announced for 2025</h2>
                                    <p className="font-medium text-[13px] max-[1216px]:text-[13px] max-sm:text-xs">June 16, 2025</p>
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