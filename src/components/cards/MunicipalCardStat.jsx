const MunicipalCardStat = ({ color }) => {
    const denominator = 8852;
    const numerator = 910;
    const percentage = Math.round((numerator / denominator) * 100 * 10) / 10;

    return (
        <div className='w-[385px] max-[880px]:w-[350px] max-[796px]:w-[320px] max-[756px]:w-[280px] max-sm:w-full h-[170px] rounded-[10px] bg-white shadow-sm grid place-items-center p-8'
             style={{ borderTop: `8px solid ${color}` }}>
            <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                    <p className="font-bold text-[15px] max-sm:text-[13px]">House Buildings Standards</p>
                    <p className="font-bold text-[15px] max-sm:text-[13px]">
                        {numerator.toLocaleString()}/{denominator.toLocaleString()}
                    </p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                    <div className='absolute top-0 left-0 h-full transition-all duration-300 ease-out'
                         style={{ 
                             width: `${percentage}%`,
                             backgroundColor: color 
                         }}>
                    </div>
                </div>
                <p className="text-end font-medium text-[13px] text-gray-600">
                    {percentage}% compliant
                </p>
            </div>
        </div>
    )
}
export default MunicipalCardStat;