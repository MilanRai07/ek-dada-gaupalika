import CommonHeaders from "../../../components/headers/CommonHeaders";

const TeamIndex = () => {
    return (
        <section className="mt-16 bg-Background px-[75px] py-[30px]">
            <CommonHeaders title='Our Team' />

            <div className="mt-6 flex justify-between gap-4">
                {
                    [...Array(3)].map((_, index) => {
                        return (
                            <div key={index}
                                className="w-[400px] h-[330px] bg-white rounded-md flex justify-center items-center flex-col gap-4">
                                <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
                                    <img src='https://placehold.co/600x400' className="w-full h-full object-cover "></img>
                                </div>
                                <h2 className="font-extrabold text-[26px]">Ram bahadur</h2>
                                <p className="font-semibold text-sm text-MainRed">Chief Administrative Officer</p>
                                <p className="font-medium text-sm">+9771234567890</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default TeamIndex;