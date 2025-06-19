
import StatsHeader from "../../../../components/headers/StatsHeader";
import PieCharts from "../../../../components/stats/PieChart";

const Stats3 = () => {
   const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data2 = [
  { name: 'Group A', value: 500 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 100 },
  { name: 'Group D', value: 50 },
];
   return (
      <div className="mt-12">
         <StatsHeader title='Survey reports and Analytics' />
         <div className="grid grid-cols-1 min-[1123px]:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 max-lg:p-3 rounded-lg shadow-sm">
          <PieCharts data={data1} title='Data 1'/>
        </div>
        
        <div className="bg-white p-6 max-lg:p-3 rounded-lg shadow-sm">
          <PieCharts data={data2} title='Data2' />
        </div>
      </div>
      </div>
   )
}
export default Stats3;