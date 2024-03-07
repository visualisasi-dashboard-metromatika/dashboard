import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

const MonoPie = (props) => {
    const style = props.style
    const height = props.height
    const data = props.data
    const dataValue = props.dataValue
    const theme = props.theme

    const [color, setColor] = useState('#fff');

    useEffect(() => {
        if (theme == "dark") {
            setColor("#fff");
        } else {
            setColor("#fff");
        }
    }, []);

    const options4 = {
        chart: {
          type: "pie",
          width: "100%"
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.labels[opts.seriesIndex];
          },
          style: {
            fontSize: "3px",
            fontWeight: "bold",
            colors: [color],
            offsetX: 0, // Adjust this value to move the labels horizontally
            offsetY: 0
          }
        },
        theme: {
          monochrome: {
            enabled: true
          }
        },
        labels: data,
        series: dataValue,
        legend: {
          show: false
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 310
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };

    return (
        <Chart
            height={height}
            options={options4}
            series={options4.series}
            type={options4.chart.type}
            style={style}
        />
    );
}

export default MonoPie;