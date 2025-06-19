import StatsHeader from "../../../../components/headers/StatsHeader";
const Stats4 = () => {
    const data = [
        { Category: 'Total House', Count: 2120},
        { Category: 'Total Population', Count: 21200},
        { Category: 'Male', Count: 21200},
        { Category: 'Female', Count: 21200},
        { Category: 'Others', Count: 21200},
    ]
    
    return (
        <div className="mt-12">
            <StatsHeader title='Municipaity Population Detail' />

            <div className="mt-8">
                <table className="w-full border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-yellow-500 text-white text-left">
                            <th className="px-3 py-2">Category</th>
                            <th className="px-3 py-2">Count</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-gray-800">
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-t border-gray-200 ">
                                <td className="px-3 py-2">{row.Category}</td>
                                <td className="px-3 py-2">{row.Count}</td>
                             
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Stats4;