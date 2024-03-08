// import React from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// // import satudata from "../../assets/json/satudata_res.json";

// const RechartLine = ({ x, chartTitle, checkedItems, width, height, updated, style }) => {
//     const data = x.map(({ name }, index) => ({
//         name,
//         ...checkedItems.reduce((acc, item) => {
//           acc[item.label] = item.data[index];
//           return acc;
//         }, {}),
//       }));
      

//     const date = new Date(updated);

//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();

//     const formattedDate = `${day}-${month}-${year}`;

//     return (
//         <div className="card">
//             {JSON.stringify(data)}
//             <div className="row">
//                 <div className="col-6"><p className="card-title mt-2 truncate" style={{ marginLeft: "10px", fontSize: "5px" }}><b>{chartTitle}</b></p></div>
//                 <div className="col-4"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>{formattedDate}</p></div>
//             </div>
//             <div style={style}>
//                 <LineChart width={width} height={height} data={data}>
//                     <XAxis fontSize={8} tick={{ fill: "#fff" }} axisLine={{ stroke: "#fff" }} tickLine={{ stroke: "#fff" }} />
//                     <YAxis fontSize={8} tick={{ fill: "#fff" }} axisLine={{ stroke: "#fff" }} tickLine={{ stroke: "#fff" }} />
//                     <Tooltip labelStyle={{ color: "#fff" }} />
//                     <Legend wrapperStyle={{ fontSize: '6px', marginLeft: "20px", color: "#fff" }} />

//                     {checkedItems.map((item, index) => (
//                         <Line
//                             key={index}
//                             type="monotone"
//                             dataKey={item.label}
//                             name={item.label}
//                             stroke={"#000"}
//                             strokeWidth={""}
//                         />
//                     ))}
//                 </LineChart>
//             </div>
//         </div>
//     );
// };

// export default RechartLine;

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const RechartLine = ({ x, chartTitle, checkedItems, width, height, updated, style }) => {
  const data = x.map((year) => ({
    name: year,
    ...checkedItems.reduce((acc, item) => {
      acc[item.label] = item.data[year - 2016];
      return acc;
    }, {}),
  }));

  const date = new Date(updated);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${day}-${month}-${date.getFullYear()}`;
  const truncatedTitle = chartTitle.length > 15 ? chartTitle.slice(0, 15) + "..." : chartTitle;

  const lineColors = ["#00aaff", "#0077cc", "#004488", "#001155", "#66b3ff", "#3385cc"];

  return (
    <div className="card">
      <div className="row">
        <div className="col-6">
        <p className="card-title mt-2 text-white" style={{ marginLeft: "10px", fontSize: "5px" }}>
                        <b>{truncatedTitle}</b>
                    </p>
        </div>
        <div className="col-4">
          <p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>
            {formattedDate}
          </p>
        </div>
      </div>
      <div style={style}>
        <LineChart width={width} height={height} data={data}>
          <XAxis dataKey="name" fontSize={8} tick={{ fill: "#fff" }} axisLine={{ stroke: "#fff" }} tickLine={{ stroke: "#fff" }} />
          <YAxis fontSize={8} tick={{ fill: "#fff" }} axisLine={{ stroke: "#fff" }} tickLine={{ stroke: "#fff" }} />
          <Tooltip labelStyle={{ color: "#fff" }} />
          <Legend wrapperStyle={{ fontSize: '6px', marginLeft: "20px", color: "#fff" }} />

          {checkedItems.map((item, index) => (
            <Line
              key={index}
              type="linear"
              dataKey={item.label}
              name={item.label}
              stroke={lineColors[index % lineColors.length]}
              strokeWidth={2} 
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default RechartLine;
