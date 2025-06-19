import CommonHeaders from "../../../components/headers/CommonHeaders";

const AboutIndex = () => {
    return (
        <section className="py-[60px] max-md:py-[48px] max-sm:py-[28px]">
            <CommonHeaders title='About Ekdada Gaupalika' />
            <div className="w-full flex flex-col min-[882px]:flex-row gap-6 p-6 rounded-[10px] mt-8 max-lg:mt-5 max-sm:mt-3">

                <div className="w-full min-[882px]:w-[417px] h-[278px] min-[882px]:h-auto overflow-hidden rounded-[10px] shrink-0">
                    <img
                        src='https://placehold.co/600x400'
                        alt='ek dada nagarpalika'
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    <p className="font-medium text-sm min-[882px]:text-[16px] text-black/70">
                        Ekdada Gaupalika is committed to providing excellent services to our community members.
                        We focus on sustainable development, transparent governance, and inclusive growth.
                        Our mission is to improve the quality of life for all residents through effective administration,
                        infrastructure development, and community-centered programs. We believe in participatory governance and
                        strive to create opportunities for every citizen to contribute to our collective progress. Ekdada Gaupalika is
                        committed to providing excellent services to our community members. We focus on sustainable development, transparent
                        governance, and inclusive growth. Our mission is to improve the quality of life for all residents through effective administration,
                        infrastructure development, and community-centered programs.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default AboutIndex;