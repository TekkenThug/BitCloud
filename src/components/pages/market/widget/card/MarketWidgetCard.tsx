import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

import { ReactComponent as Logo } from "assets/icons/currency/bitcoin.svg";
import styles from "./MarketWidgetCard.module.scss";

interface MarketWidgetCardProps {
	name: string;
	percentage: number;
	value: string;
	secondValue: string;
	className?: string;
}

const MarketWidgetCard: React.FC<MarketWidgetCardProps> = (
	{
		name,
		percentage,
		value,
		secondValue,
		className = ""
	}
) => {
	const chartColor = percentage < 0 ? "#FF6838" : "#58BD7D";
	const processedPercentage = `${percentage < 0 ? "" : "+"}${percentage}%`;

	const data = [
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

	return (
		<div className={`${styles.MarketWidgetCard} ${className}`}>
			<div>
				<Logo className={styles.currency} />

				<div>
					<div className={styles.info}>
						<div className={styles.name}>
							{ name }
						</div>

						<div className={`${styles.percentage} ${percentage < 0 ? styles.percentage_negative : ""}`}>
							{ processedPercentage }
						</div>
					</div>

					<div className={styles.value}>
						{ value }
					</div>

					<div className={styles.secondValue}>
						{ secondValue }
					</div>
				</div>
			</div>

			<div className={styles.chart}>
				<ResponsiveContainer
					width="100%"
					height="100%"
				>
					<AreaChart
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor={chartColor} stopOpacity={0.5} />
								<stop offset="90%" stopColor={chartColor} stopOpacity={0} />
							</linearGradient>
						</defs>

						<Area type="monotone" dataKey="pv" stroke={chartColor} fillOpacity={1} fill="url(#colorPv)" />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default MarketWidgetCard;
