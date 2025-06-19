const CommonHeaders = ({title}) => {
    return (
        <div className="w-auto">
            <p className="text-center font-extrabold text-[26px] max-md:text-[23px] max-sm:text-[18px] text-MainRed pb-2 max-md:pb-1">{title}</p>
            <div className="w-[3%] h-[5px] max-sm:w-[4%] max-sm:h-[4px] mx-auto bg-MainRed"></div>
        </div>
    )
}
export default CommonHeaders;