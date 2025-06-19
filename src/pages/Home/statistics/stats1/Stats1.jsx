import MunicipalCardStat from "../../../../components/cards/MunicipalCardStat";
import StatsHeader from "../../../../components/headers/StatsHeader";

const Stats1 = () => {
 
    const statsData = [
        { title: "House Buildings Standards", numerator: 910, denominator: 8852 },
        { title: "Water Supply Coverage", numerator: 4200, denominator: 8852 },
        { title: "Waste Management", numerator: 3800, denominator: 8852 },
        { title: "Road Infrastructure", numerator: 2500, denominator: 8852 },
        { title: "Public Schools", numerator: 32, denominator: 45 },
        { title: "Health Facilities", numerator: 18, denominator: 25 }
    ];

    const colors = ['#3498DB', '#F39C12', '#27AE60', '#9B59B6', '#E74C3C', '#1ABC9C'];

    return (
        <div className="mt-12">
            <StatsHeader title='Municipality Statistics'/>

            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statsData.map((stat, index) => (
                    <MunicipalCardStat
                        key={index}
                        title={stat.title}
                        numerator={stat.numerator}
                        denominator={stat.denominator}
                        color={colors[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats1;