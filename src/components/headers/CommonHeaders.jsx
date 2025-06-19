const CommonHeaders = ({title}) => {
    return (
        <div className="w-auto">
            <p className="text-center font-extrabold text-[26px] text-MainRed pb-2">{title}</p>
            <div className="w-[3%] h-[5px] mx-auto bg-MainRed"></div>
        </div>
    )
}
export default CommonHeaders;