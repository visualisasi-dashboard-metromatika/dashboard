import Chart from "react-apexcharts";

const Gauge = (props) => {
    const style = props.style
    const height = props.height
    const series = props.series

    const options6 = {
        chart: {
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "5px",
                color: undefined,
                offsetY: 30
              },
              value: {
                offsetY: 0,
                fontSize: "5px",
                color: "#fff",
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          }
        },
        stroke: {
          dashArray: 2
        },
        series: [series],
        labels: ["Median Ratio"]
      };

    return (
        <Chart
            height={height}
            options={options6}
            series={options6.series}
            type={options6.chart.type}
            style={style}
        />
    );
}

export default Gauge;