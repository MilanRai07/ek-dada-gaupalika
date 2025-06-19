import StatsHeader from "../../../../components/headers/StatsHeader";
const Stats5 = () => {
    const data = [
        { ward: 1, houses: 21200, male: 21200, female: 21200, others: 1, population: 21200 },
        { ward: 1, houses: 21200, male: 21200, female: 21200, others: 1, population: 21200 },
        { ward: 1, houses: 21200, male: 21200, female: 21200, others: 1, population: 21200 },
        { ward: 1, houses: 21200, male: 21200, female: 21200, others: 1, population: 21200 },
    ]
    const total = data.reduce(
        (acc, curr) => ({
            houses: acc.houses + curr.houses,
            male: acc.male + curr.male,
            female: acc.female + curr.female,
            others: acc.others + curr.others,
            population: acc.population + curr.population,
        }),
        { houses: 0, male: 0, female: 0, others: 0, population: 0 }
    )
    return (
        <div className="mt-12">
            <StatsHeader title='Municipaity Population Detail' />

            <div className="mt-8 max-[555px]:hidden">
                <table className="w-full border border-gray-300 text-sm md:text-base text-left">
                    <thead>
                        <tr className="bg-yellow-500 text-white text-center">
                            <th className="px-3 py-2">Ward</th>
                            <th className="px-3 py-2">No. of Houses</th>
                            <th className="px-3 py-2">Male</th>
                            <th className="px-3 py-2">Female</th>
                            <th className="px-3 py-2">Others</th>
                            <th className="px-3 py-2">Population</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-gray-800">
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-t border-gray-200 text-center">
                                <td className="px-3 py-2">{row.ward}</td>
                                <td className="px-3 py-2">{row.houses.toLocaleString()}</td>
                                <td className="px-3 py-2">{row.male.toLocaleString()}</td>
                                <td className="px-3 py-2">{row.female.toLocaleString()}</td>
                                <td className="px-3 py-2">{row.others}</td>
                                <td className="px-3 py-2">{row.population.toLocaleString()}</td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100 font-semibold border-t border-gray-300 text-center">
                            <td className="px-3 py-2">Total</td>
                            <td className="px-3 py-2">{total.houses.toLocaleString()}</td>
                            <td className="px-3 py-2">{total.male.toLocaleString()}</td>
                            <td className="px-3 py-2">{total.female.toLocaleString()}</td>
                            <td className="px-3 py-2">{total.others}</td>
                            <td className="px-3 py-2">{total.population.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 max-[555px]:block hidden">
                {data.map((row, idx) => (
                    <div key={idx} className="mb-4 p-3 border border-gray-200 bg-white rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="font-medium">Ward: <span className="font-normal">{row.ward}</span></div>
                            <div className="font-medium">Houses: <span className="font-normal">{row.houses.toLocaleString()}</span></div>
                            <div className="font-medium">Male: <span className="font-normal">{row.male.toLocaleString()}</span></div>
                            <div className="font-medium">Female: <span className="font-normal">{row.female.toLocaleString()}</span></div>
                            <div className="font-medium">Others: <span className="font-normal">{row.others}</span></div>
                            <div className="font-medium">Population: <span className="font-normal">{row.population.toLocaleString()}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Stats5;