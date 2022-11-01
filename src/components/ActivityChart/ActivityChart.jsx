import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import './activity-chart.scss'

const ActivityChart = ({userActivity}) => {
    return (
        <div className="activity-chart">
            <div className="activity-chart__header">
                <h2 className={"activity-chart__title"}>Activité quotidienne</h2>
                <div className="activity-chart__legends">
                    <p className={"weight"}>Poids (kg)</p>
                    <p className={"calories"}>Calories brûlées (kCal)</p>
                </div>
            </div>
            <div className="activity-chart__container">
                <ResponsiveContainer>
                    <BarChart
                        data={userActivity}
                        barGap={8}
                    >
                        <Bar
                            radius={[5, 5, 0, 0]}
                            barSize={7}
                            dataKey="kilogram"
                            fill="#020203"
                            unit={"kg"}
                        />
                        <Bar
                            radius={[5, 5, 0, 0]}
                            barSize={7}
                            dataKey="calories"
                            fill="#E60000"
                            unit={"kcal"}
                        />
                        <XAxis
                            scale={"point"}
                            padding={{left: 10, right: 10}}
                            tick={{fill: "#9B9EAC", fontSize: "14px",}}
                            dataKey="day"
                            interval={0}
                            tickMargin={15}
                            tickLine={false}
                            tickFormatter={(value) => {
                                const newDate = new Date(value);
                                return (newDate.getDate())
                            }}
                            axisLine={false}
                        />
                        <YAxis
                            tick={{fill: "#9B9EAC", fontSize: "14px"}}
                            orientation={"right"}
                            type={"number"}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={35}
                        />
                        <Tooltip
                            wrapperStyle={{fontSize: "8px", borderRadius: "0"}}
                            labelStyle={{display: "none"}}
                            itemStyle={{color: "#fff", marginBottom: "5px"}}
                            contentStyle={{backgroundColor: "#E60000", color: "#fff", borderRadius: "0", padding: "5px"}}
                            allowEscapeViewBox={{x: true, y: true}}
                            formatter={(value, name) => {
                                return [`${value}`]
                            }}
                        />
                        <CartesianGrid
                            strokeDasharray="4"
                            vertical={false}
                            stroke={"#DEDEDEa1"}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActivityChart;
