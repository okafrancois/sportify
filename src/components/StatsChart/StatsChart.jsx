import React from 'react';
import './stats-chart.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const StatsChart = ({data}) => {
    return (
        <div className={"stats-chart"}>
            <div className="stats-chart__container">
                <ResponsiveContainer width={"100%"} aspect={1}>
                    <RadarChart
                        outerRadius={'70%'}
                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                        data={data}>
                        <PolarGrid
                            stroke={"#fff"}
                            strokeOpacity={0.8}
                        />
                        <PolarAngleAxis
                            dataKey="kind"
                            tick={{fill: "#fff", fontSize: "10px", fontWeight: "500"}}
                        />
                        <Radar name="value" dataKey="value" stroke={"transparent"} fill={"#FF0101"} fillOpacity={0.8} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatsChart;
