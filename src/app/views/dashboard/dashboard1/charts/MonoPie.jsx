import Chart from "react-apexcharts";

const MonoPie = (props) => {
    const style = props.style
    const height = props.height
    const data = props.data
    const dataValue = props.dataValue

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
            fontWeight: "bold"
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