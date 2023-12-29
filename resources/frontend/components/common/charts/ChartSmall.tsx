import React from "react";
import { v4 as uuid4 } from "uuid";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface ChartSmallProps {
	color: string;
}

const ChartSmall: React.FC<ChartSmallProps> = (
    {
        color,
    }
) => {
    const mockData = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const uniqueId = uuid4();
	
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
        >
            <AreaChart
                data={mockData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id={uniqueId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.5} />
                        <stop offset="90%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area type="monotone" dataKey="pv" stroke={color} fillOpacity={1} fill={`url(#${uniqueId})`} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartSmall;
