import StatsHeader from "../../../../components/headers/StatsHeader"

const Stats2 = () => {
    return (
        <div className="mt-12">
            <StatsHeader title='Local Data' />
            <div className="mt-8 grid grid-cols-5 gap-5">
                {
                    [...Array(5)].map((_,index) => {
                        return (
                            <div key={index}
                            className="bg-white rounded-[7px] border-l-4 border-l-MainRed h-32 flex justify-center items-center flex-col">
                                <h2 className="font-bold text-MainRed text-[30px]">12</h2>
                                <p className='text-[16px]'>Birth</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Stats2