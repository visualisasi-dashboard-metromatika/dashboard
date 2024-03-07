import ReactEcharts from "echarts-for-react";

const PieStack = (props) => {
    const series = props.series
    const style = props.style
    const data = props.data
    const dataValue = props.dataValue

    const echartStackedPieOption = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#639", "#9290C3", "#535C91", "#1B1A55", "#070F2B", "#135bba"],
    
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
    
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: series,
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            data: data.map((data, index) => (
                {
                value: dataValue[index],
                name: data,
                }
            ))
            .sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                  fontSize: "5px"
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#fff",
                },
                smooth: 0.2,
                length: 2,
                length2: 4,
              },
            },
            itemStyle: {
              normal: {
                color: "#1B1A55",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.0)",
              },
            },
    
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };

    return (
        <ReactEcharts
            style={style}
            option={echartStackedPieOption}
        />
    );
}

export default PieStack;