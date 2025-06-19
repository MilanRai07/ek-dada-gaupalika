import CommonHeaders from "../../../components/headers/CommonHeaders";

const PublicNotice = () => {
    return (
        <section className="my-12">
            <CommonHeaders title='Public Notice' />

            <div className="mt-8 h-auto rounded-[10px] border-l-8 border-l-MainRed bg-Background p-4 flex flex-col gap-9">
                {
                    [...Array(3)].map((_, index) => {
                        return (
                            <div>
                                <h2 className="font-extrabold text-[16px]">Budget Discussion Meeting</h2>
                                <p className="font-medium text-[15px]">Annual budget discussion meeting scheduled for June 20, 2025 at 2:00 PM in the Municipality Hall.</p>
                                <p className="font-medium text-[13px] text-black/60">June 15, 2025</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default PublicNotice