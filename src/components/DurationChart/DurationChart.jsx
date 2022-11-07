import React from 'react';
import './duration-chart.scss'
import {ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, AreaChart, Area} from "recharts";

const DurationChart = ({data}) => {
    return (
        <div className={"duration-chart"}>
            <div className="duration-chart__header">
                <h2>Durée moyenne des sessions</h2>
                <LineChart data={data}>
                    <XAxis
                        dataKey={"day"}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={20}
                        tick={{fill: "#fff", fontSize: "12px", textTransform: "uppercase"}}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke={"#fff"}
                        strokeWidth={2}
                        dot={false}
                    />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="duration-chart__container">
                <ResponsiveContainer>
                    <AreaChart width={"100%"}
                               height={"auto"}
                               data={data}
                               margin={{ top: 0, right: 0, left: 0, bottom: 10 }}>
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fff" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey={"day"}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={20}
                            tick={{fill: "#fff", fontSize: "12px", textTransform: "uppercase", textAnchor: "middle",}}
                            interval={"preserveStartEnd"}
                            padding={{left: 0, right: 0}}
                        />
                        <Tooltip
                            wrapperStyle={{fontSize: "8px", borderRadius: "0"}}
                            labelStyle={{display: "none"}}
                            itemStyle={{color: "#000", marginBottom: "5px"}}
                            contentStyle={{backgroundColor: "#fff", color: "#000", borderRadius: "0", padding: "5px"}}
                            allowEscapeViewBox={{x: true, y: true}}
                            formatter={(value, name) => {
                                return [`${value}`]
                            }}
                        />
                        <Area
                            outerRadius={["0%", "0%"]}
                            type="natural"
                            dataKey="sessionLength"
                            stroke="#fff"
                            unit={" min"}
                            strokeWidth={2}
                            dot={false}
                            fillOpacity={0.5}
                            fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default DurationChart;
