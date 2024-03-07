import ReactEcharts from "echarts-for-react";

const Bar = (props) => {
    const style = props.style
    const data = props.data
    const dataValue = props.dataValue

    const echartBasicLineOption = {
        tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
                type: "line",
                animation: true,
            }
        },
        grid: {
            top: "10%",
            left: "40",
            right: "40",
            bottom: "40",
        },
        xAxis: {
            type: "category",
            data: data,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                fontSize: "5",
                color: "#fff"
            },
            axisTick: {
                show: false,
            }
        },
        yAxis: {
            type: "value",
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                fontSize: "5",
                color: "#fff"
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
            },
            ticks: {
                fontSize: "1px"
            }
        },
        series: [
            {
                data: dataValue,
                type: "bar",
                showSymbol: true,
                smooth: false,
                color: "#639",
                lineStyle: {
                    color: "#6c94bb",
                    opacity: 1,
                    width: 1.5,
                },
                itemStyle: {
                    show: false,
                    color: "#6c94bb",
                    borderColor: "#6c94bb",
                    borderWidth: 1.5,
                },
            },
        ],
    };

    return (
        <ReactEcharts
            style={style}
            option={echartBasicLineOption}
        />
    );
}

export default Bar;