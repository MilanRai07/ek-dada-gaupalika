import CommonHeaders from "../../../components/headers/CommonHeaders";

const TeamIndex = () => {
    return (
        <section className="mt-16 max-md:mt-10 bg-Background px-[75px] max-lg:px-[45px] max-sm:px-[30px] py-[30px] max-md:py-[24px] max-sm:py-[18px]">
            <CommonHeaders title='Our Team' />

            <div className="mt-6 flex justify-between gap-4 max-md:flex-wrap max-[682px]:grid max-[682px]:place-items-center max-[562px]:grid-cols-1 max-[682px]:grid-cols-2 max-md:items-center max-md:justify-center max-md:gap-3
            max-[682px]:gap-2 max-[682px]:w-full
            ">
                {
                    [...Array(3)].map((_, index) => {
                        return (
                            <div key={index}
                                className="bg-white w-[400px] max-md:w-[290px] max-[682px]:!w-[250px] max-[562px]:!w-[350px] max-[422px]:!w-full h-[330px] max-[878px]:h-[270px] rounded-md flex justify-center items-center flex-col gap-4 max-[1266px]:gap-3
                                max-[878px]:gap-2
                                ">
                                <div className="h-[110px] w-[110px] rounded-full overflow-hidden">
                                    <img src='https://placehold.co/600x400' className="w-full h-full object-cover "></img>
                                </div>
                                <h2 className="font-extrabold text-[26px] max-[1266px]:text-[20px] max-[878px]:text-[18px] max-sm:text-[16px]">Ram bahadur</h2>
                                <p className="font-semibold text-sm max-[878px]:text-xs max-sm:text-[11px] text-MainRed">Chief Administrative Officer</p>
                                <p className="font-medium text-sm max-[878px]:text-xs max-sm:text-[11px]">+9771234567890</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default TeamIndex;