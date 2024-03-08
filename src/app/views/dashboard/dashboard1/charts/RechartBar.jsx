import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const RechartBar = ({ chartData, chartTitle, height, width, updated, style }) => {
    const { lbl, chartData: chartDataItems } = chartData;

    const data = lbl?.map((name, index) => {
        const dataObj = { name };
        chartDataItems?.forEach((dataItem) => {
            dataObj[dataItem.label] = dataItem.data[index];
        });
        return dataObj;
    });

    const date = new Date(updated);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    const truncatedTitle = chartTitle.length > 25 ? chartTitle.slice(0, 25) + "..." : chartTitle;

    return (
        <div className="card">
            <div className="row">
                <div className="col-6">
                <p className="card-title mt-2 text-white" style={{ marginLeft: "10px", fontSize: "5px" }}>
                        <b>{truncatedTitle}</b>
                    </p>
                </div>
                <div className="col-4"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>{formattedDate}</p></div>
            </div>
            <div style={style}>
                <ResponsiveContainer className={"text-xs"} width={width || "100%"} height={height}>
                    <BarChart data={data}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" fontSize={8} />
                        <YAxis fontSize={8} />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '6px', marginLeft: "20px" }} />
                        {chartDataItems?.map((dataItem) => (
                            <Bar
                                key={dataItem.label}
                                dataKey={dataItem.label}
                                fill={dataItem.backgroundColor}
                                // barSize={10}
                                radius={[5, 5, 0, 0]}
                            />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RechartBar;