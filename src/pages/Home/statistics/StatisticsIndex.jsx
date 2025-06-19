import CommonHeaders from "../../../components/headers/CommonHeaders";
import { ReactComponent as Down } from '../../../assets/svg/dropDown.svg'
import { useState } from "react";
import Stats1 from "./stats1/Stats1";
import Stats3 from "./stats3/Stats3";
import Stats4 from "./stats4/Stats4";
import Stats5 from "./stats5/Stats5";
import Stats2 from "./stats2/Stats2";

const StatisticsIndex = () => {
    const [selectedWard, setSelectedWard] = useState('All Wards');
    const [showDrop, setSHowDrop] = useState(false)
    const wards = [1, 2, 3, 4, 5, 6];

    const allWards = [
        'All Wards',
        ...wards.map(ward => `Ward ${ward}`)
    ];
    return (
        <section className="py-[60px] bg-Background px-[75px]  max-lg:px-[45px] max-sm:px-[30px] max-md:py-[48px] max-sm:py-[28px]">
            <CommonHeaders title='Municipality Statistics & Data' />
            <div className="w-full h-[110px] max-lg:h-auto max-lg:py-4  bg-MainRed mt-12 max-md:mt-10 max-sm:mt-9 rounded-[10px] px-7 flex justify-between items-center max-lg:flex-col max-lg:items-center
            max-lg:gap-3
            ">
                <div className="text-white max-lg:text-center">
                    <p className="font-extrabold text-[18px] max-lg:text-[16px]">Municipality Data Overview</p>
                    <p className="font-medium text-sm max-lg:text-sm max-sm:text-xs max-sm:mt-2">Comprehensive statistical information and demographic data of Ekdada Gaupalika</p>
                </div>
                <div className="relative w-[135px] max-sm:w-[120px] h-[55px] max-sm:h-[45px] bg-white rounded-[10px] grid place-items-center font-semibold text-[15px] cursor-pointer">
                    <div className="flex items-center gap-4 max-lg:text-[13px] "
                        onClick={() => setSHowDrop(!showDrop)}
                    >
                        <span>{selectedWard}</span>
                        <span>
                            <Down className='w-[15px] h-[9px]' />
                        </span>
                    </div>
                    {
                        showDrop && (
                            <div className="absolute top-[110%] w-full bg-red-100 min-h-7 rounded-[10px] overflow-hidden "
                                style={{
                                    maxHeight: showDrop ? "200px" : "0",
                                    opacity: showDrop ? "1" : "0",
                                }}
                            >
                                {
                                    allWards.map((item, index) => {
                                        return (
                                            <p
                                                onClick={() => {
                                                    setSelectedWard(item)
                                                    setSHowDrop(false)
                                                }}
                                                key={index}
                                                className="p-2 text-[11px] hover:bg-red-200  text-center border-b-[1px] border-b-black/80
                                    transition-all duration-300 ease-in-out
                                    ">{item}</p>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {/* statistics below */}
            <Stats1 />
            <Stats2 />
            <Stats3 />
             <Stats4 />
            <Stats5 /> 

        </section>
    )
}
export default StatisticsIndex;