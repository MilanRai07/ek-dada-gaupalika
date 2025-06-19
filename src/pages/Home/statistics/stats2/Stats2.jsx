import StatsHeader from "../../../../components/headers/StatsHeader"

const Stats2 = () => {
    return (
        <div className="mt-12">
            <StatsHeader title='Local Data' />
            <div className="mt-8 grid grid-cols-5 gap-5 max-sm:grid-cols-3">
                {
                    [...Array(5)].map((_,index) => {
                        return (
                            <div key={index}
                            className="bg-white rounded-[7px] border-l-4 border-l-MainRed h-32 max-lg:h-24 max-sm:h-16 flex justify-center items-center flex-col">
                                <h2 className="font-bold text-MainRed text-[30px] max-lg:text-[24px] max-sm:text-[18px]">12</h2>
                                <p className='text-[16px] max-lg:text-[14px] max-sm:text-xs'>Birth</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Stats2