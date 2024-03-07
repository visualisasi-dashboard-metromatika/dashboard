import Chart from "react-apexcharts";

const Radar = (props) => {
    const style = props.style
    const height = props.height
    const data = props.data
    const dataValue = props.dataValue

    const radar = {
        chart: {
            toolbar: {
                show: false
            },
            height: 450,
            type: "radar"
        },
        series: [
            {
                name: "Series 1",
                data: dataValue
            }
        ],
        labels: data,
        plotOptions: {
            radar: {
                size: 61,
                polygons: {
                    strokeColor: "#fff",
                    fill: {
                        colors: ["#f8f8f8", "#fff"]
                    }
                }
            }
        },
        colors: ["#FF4560"],
        markers: {
            size: 2,
            colors: ["#fff"],
            strokeColor: "#FF4560",
            strokeWidth: 2
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val, i) {
                    if (i % 2 === 0) {
                        return val;
                    } else {
                        return "";
                    }
                },
                show: true,
                style: {
                    colors: ["#fff"],
                    fontSize: "3px"
                }
            }
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
                    fontSize: "4px"
                }
            }
        }
    };

    return (
        <Chart
            height={height}
            options={radar}
            series={radar.series}
            type={radar.chart.type}
            style={style}
        />
    );
}

export default Radar;