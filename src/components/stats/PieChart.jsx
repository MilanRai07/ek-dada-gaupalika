import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props, screenWidth) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  // Adjust these values based on screen width
  const lineExtension = screenWidth < 527 ? 15 : 30; // Shorter line on mobile
  const textOffset = screenWidth < 527 ? 8 : 12;    // Closer text on mobile

  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + lineExtension) * cos;
  const my = cy + (outerRadius + lineExtension) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * (screenWidth < 527 ? 10 : 22);
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="font-medium">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        style={{ outline: 'none' }}  // Add this line
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        style={{ outline: 'none' }}  // Add this line
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" className='w-1' />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="text-sm">
        {value}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="text-xs">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};
const PieCharts = ({ title, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  let innerRadius;
  if (screenWidth > 1195) {
    innerRadius = 80;
  } else if (screenWidth < 570) {
    innerRadius = 50;
  } else {
    innerRadius = 90;
  }

  let outerRadius;
  if (screenWidth > 1195) {
    outerRadius = 110;
  } else if (screenWidth < 570) {
    outerRadius = 80;
  } else {
    outerRadius = 120;
  }

  return (
    <div className="w-full h-[500px] max-[570px]:h-[410px] bg-white rounded-lg ">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h3>

      <div className="h-[400px] max-[570px]:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={(props) => renderActiveShape(props, screenWidth)}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={onPieEnter}
              style={{ outline: 'none' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-4 mt-4 flex-wrap max-lg:gap-3">
        {data.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-gray-600">
              {item.name}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;