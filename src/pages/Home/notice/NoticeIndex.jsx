const NoticeIndex=()=>{
   return(
    <section className="mt-8">
        <div className="w-full bg-MainRed h-[65px] max-md:h-[55px] max-sm:h-[45px] rounded-[15px] flex items-center
        font-extrabold text-md max-md:text-sm max-sm:text-[13px] p-4 text-white gap-3">
            <p>Latest</p>
            <marquee className='font-extrabold text-md max-md:text-sm max-sm:text-[13px] p-4 flex items-center h-full'>
                Hello New development projects announced for 2025 •
            </marquee>
        </div>
    </section>
   )
}
export default NoticeIndex;