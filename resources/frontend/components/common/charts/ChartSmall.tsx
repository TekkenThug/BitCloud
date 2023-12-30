import { FC } from "react";
import { v4 as uuid4 } from "uuid";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface Props {
	color: string;
    className?: string;
    data: {
        y: number;
        x: number | string;
    }[]
}

const ChartSmall: FC<Props> = (
    {
        color,
        data,
        className = "",
    }
) => {
    const uniqueId = uuid4();
	
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className={className}
        >
            <AreaChart
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id={uniqueId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.5} />
                        <stop offset="90%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area type="monotone" dataKey="y" stroke={color} fillOpacity={1} fill={`url(#${uniqueId})`} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartSmall;
