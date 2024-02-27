import ReactEcharts from "echarts-for-react";
import { ProgressBar } from "react-bootstrap";
import Chart from "react-apexcharts";
import * as echarts from "echarts";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

const SocialMedia = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const flipCard = () =>{
    setIsFlipped(!isFlipped);
  }

  setInterval(flipCard, 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  const echartStackedPieOption = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    color: ["#639", "#63845", "#ebcb37", "#a1b968", "#0d94bc", "#135bba"],

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
        name: "Source",
        type: "pie",
        radius: "85%",
        center: ["50%", "50%"],
        data: [
          {
            value: 335,
            name: "Direct Interview",
          },
          {
            value: 310,
            name: "Email Marketing",
          },
          {
            value: 274,
            name: "Alliance advertising",
          },
          {
            value: 235,
            name: "Video Ads",
          },
          {
            value: 400,
            name: "Search Engine",
          },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          normal: {
            textStyle: {
              color: "#333",
              fontSize: "5px"
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "#333",
            },
            smooth: 0.2,
            length: 2,
            length2: 4,
          },
        },
        itemStyle: {
          normal: {
            color: "rgb(102, 51, 153)",
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

  const echartBasicLineOption6 = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      axisLabel: {
        color: "#999",
        fontSize: '5'
      },
      axisLine: {
        color: "#999",
        lineStyle: {
          color: "#999999",
        },
      },
    },
    yAxis: {
      type: "value",
      min: 65,
      max: 110,
      axisLabel: {
        color: "#999",
        fontSize: '5'
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "Alpha",
        data: [70, 65, 85, 75, 95, 86, 93],
        type: "line",
        smooth: true,
        symbolSize: 8,
        lineStyle: {
          color: "#ff5721",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#fff",
          borderColor: "#ff5721",
          borderWidth: 1.5,
        },
      },
      {
        name: "Beta",
        data: [80, 90, 75, 104, 75, 80, 70],
        type: "line",
        smooth: true,
        symbolSize: 8,
        lineStyle: {
          color: "#5f6cc1",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#fff",
          borderColor: "#5f6cc1",
          borderWidth: 1.5,
        },
      },
      {
        name: "Gama",
        data: [110, 95, 102, 90, 105, 95, 108],
        type: "line",
        smooth: true,
        symbolSize: 10,
        lineStyle: {
          color: "#4cae50",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#fff",
          borderColor: "#4cae50",
          borderWidth: 1.5,
        },
      },
    ],
  };

  const echartBasicLineOption5 = {
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
      data: [
        "1/11/2018",
        "2/11/2018",
        "3/11/2018",
        "4/11/2018",
        "5/11/2018",
        "6/11/2018",
        "7/11/2018",
        "8/11/2018",
        "9/11/2018",
        "10/11/2018",
        "11/11/2018",
        "12/11/2018",
        "13/11/2018",
        "14/11/2018",
        "15/11/2018",
        "16/11/2018",
        "17/11/2018",
        "18/11/2018",
        "19/11/2018",
        "20/11/2018"
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "5"
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
        fontSize: "5"
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      }
    },
    series: [
      {
        name: "Visit",
        type: "bar",
        smooth: false,
        data: [
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95, 115, 95, 126,
          125, 145, 115, 140, 135
        ],
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          color: "rgb(95, 107, 194)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#5f6cc1",
          borderColor: "#5f6cc1",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(95, 107, 194, 1)",
                },
                {
                  offset: 0.5,
                  color: "rgba(95, 107, 194, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(95, 107, 194, 0)",
                },
              ],
            },
          },
        },
      },
      {
        data: [
          120, 120, 20, 140, 20, 130, 20, 120, 120, 120, 120, 20, 120, 20, 120,
          120, 120, 120, 120, 120
        ],
        type: "bar",
        showSymbol: true,
        smooth: true,
        color: "#639",
        lineStyle: {
          color: "rgb(255, 87, 33)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          show: false,
          color: "#ff5721",
          borderColor: "#ff5721",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255, 87, 33, 1)",
                },
                {
                  offset: 0.3,
                  color: "rgba(255, 87, 33, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 87, 33, 0)",
                },
              ],
            },
          },
        },
      },
    ],
  };

  const echartBasicLineOption4 = {
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
      data: [
        "1/11/2018",
        "2/11/2018",
        "3/11/2018",
        "4/11/2018",
        "5/11/2018",
        "6/11/2018",
        "7/11/2018",
        "8/11/2018",
        "9/11/2018",
        "10/11/2018",
        "11/11/2018",
        "12/11/2018",
        "13/11/2018",
        "14/11/2018",
        "15/11/2018",
        "16/11/2018",
        "17/11/2018",
        "18/11/2018",
        "19/11/2018",
        "20/11/2018"
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "5"
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
        fontSize: "5"
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      }
    },
    series: [
      {
        name: "Visit",
        type: "bar",
        smooth: false,
        data: [
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95, 115, 95, 126,
          125, 145, 115, 140, 135
        ],
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          color: "rgb(95, 107, 194)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#5f6cc1",
          borderColor: "#5f6cc1",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(95, 107, 194, 1)",
                },
                {
                  offset: 0.5,
                  color: "rgba(95, 107, 194, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(95, 107, 194, 0)",
                },
              ],
            },
          },
        },
      },
    ],
  };

  const echartBasicLineOption3 = {
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
      data: [
        "1/11/2018",
        "2/11/2018",
        "3/11/2018",
        "4/11/2018",
        "5/11/2018",
        "6/11/2018",
        "7/11/2018",
        "8/11/2018",
        "9/11/2018",
        "10/11/2018",
        "11/11/2018",
        "12/11/2018",
        "13/11/2018",
        "14/11/2018",
        "15/11/2018",
        "16/11/2018",
        "17/11/2018",
        "18/11/2018",
        "19/11/2018",
        "20/11/2018",
        "21/11/2018",
        "22/11/2018",
        "23/11/2018",
        "24/11/2018",
        "25/11/2018",
        "26/11/2018",
        "27/11/2018",
        "28/11/2018",
        "29/11/2018",
        "30/11/2018",
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "5"
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
        fontSize: "5"
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      }
    },
    series: [
      {
        name: "Visit",
        type: "line",
        smooth: false,
        data: [
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95, 115, 95, 126,
          125, 145, 115, 140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95,
        ],
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          color: "rgb(95, 107, 194)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#5f6cc1",
          borderColor: "#5f6cc1",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(95, 107, 194, 1)",
                },
                {
                  offset: 0.5,
                  color: "rgba(95, 107, 194, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(95, 107, 194, 0)",
                },
              ],
            },
          },
        },
      },
      {
        name: "Visit",
        type: "line",
        smooth: false,
        data: [
          145, 135, 95, 115, 125, 121, 195, 45, 101, 75, 35, 75, 100, 195, 95,
          125, 145, 113, 15, 35, 65, 115, 95, 175, 95, 245, 115, 145, 135, 95,
        ],
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          color: "rgb(255, 87, 33)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          show: false,
          color: "#ff5721",
          borderColor: "#ff5721",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255, 87, 33, 1)",
                },
                {
                  offset: 0.3,
                  color: "rgba(255, 87, 33, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 87, 33, 0)",
                },
              ],
            },
          },
        },
      },
    ],
  };

  const echartBasicLineOption2 = {
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
      data: [
        "1/11/2018",
        "2/11/2018",
        "3/11/2018",
        "4/11/2018",
        "5/11/2018",
        "6/11/2018",
        "7/11/2018",
        "8/11/2018",
        "9/11/2018",
        "10/11/2018",
        "11/11/2018",
        "12/11/2018",
        "13/11/2018",
        "14/11/2018",
        "15/11/2018",
        "16/11/2018",
        "17/11/2018",
        "18/11/2018",
        "19/11/2018",
        "20/11/2018",
        "21/11/2018",
        "22/11/2018",
        "23/11/2018",
        "24/11/2018",
        "25/11/2018",
        "26/11/2018",
        "27/11/2018",
        "28/11/2018",
        "29/11/2018",
        "30/11/2018",
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "5"
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
        fontSize: "5"
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      }
    },
    series: [
      {
        name: "Visit",
        type: "line",
        smooth: false,
        data: [
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95, 115, 95, 126,
          125, 145, 115, 140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95,
        ],
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          color: "rgb(95, 107, 194)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#5f6cc1",
          borderColor: "#5f6cc1",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(95, 107, 194, 1)",
                },
                {
                  offset: 0.5,
                  color: "rgba(95, 107, 194, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(95, 107, 194, 0)",
                },
              ],
            },
          },
        },
      },
    ],
  };

  const echartBasicLineOption1 = {
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
      data: [
        "1/11/2018",
        "2/11/2018",
        "3/11/2018",
        "4/11/2018",
        "5/11/2018",
        "6/11/2018",
        "7/11/2018",
        "8/11/2018",
        "9/11/2018",
        "10/11/2018",
        "11/11/2018",
        "12/11/2018",
        "13/11/2018",
        "14/11/2018",
        "15/11/2018",
        "16/11/2018",
        "17/11/2018",
        "18/11/2018",
        "19/11/2018",
        "20/11/2018",
        "21/11/2018",
        "22/11/2018",
        "23/11/2018",
        "24/11/2018",
        "25/11/2018",
        "26/11/2018",
        "27/11/2018",
        "28/11/2018",
        "29/11/2018",
        "30/11/2018",
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "5"
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
        fontSize: "5"
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
        data: [
          230, 831, 400, 988, 100, 320, 200, 100, 800, 800, 200, 100, 200, 1050,
          900, 1450, 1200, 1350, 902, 10, 100, 200, 150, 405, 590, 221, 120,
          903, 852, 630,
        ],
        type: "line",
        showSymbol: true,
        smooth: true,
        color: "#639",
        lineStyle: {
          color: "rgb(255, 87, 33)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          show: false,
          color: "#ff5721",
          borderColor: "#ff5721",
          borderWidth: 1.5,
        }
      },
      {
        data: [
          1415, 1315, 915, 1115, 1125, 1211, 1915, 45, 1101, 715, 315, 715, 1010, 1925, 915,
          1215, 1415, 1113, 115, 135, 451, 1115, 95, 1715, 915, 245, 115, 145, 135, 952,
        ],
        type: "line",
        showSymbol: true,
        smooth: true,
        color: "#639",
        lineStyle: {
          color: "rgb(95, 107, 194)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#5f6cc1",
          borderColor: "#5f6cc1",
          borderWidth: 1.5,
        },
      },
    ],
  };

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
      data: [
        "1/11/2018",
        "2/11/2018",
        "3/11/2018",
        "4/11/2018",
        "5/11/2018",
        "6/11/2018",
        "7/11/2018",
        "8/11/2018",
        "9/11/2018",
        "10/11/2018",
        "11/11/2018",
        "12/11/2018",
        "13/11/2018",
        "14/11/2018",
        "15/11/2018",
        "16/11/2018",
        "17/11/2018",
        "18/11/2018",
        "19/11/2018",
        "20/11/2018",
        "21/11/2018",
        "22/11/2018",
        "23/11/2018",
        "24/11/2018",
        "25/11/2018",
        "26/11/2018",
        "27/11/2018",
        "28/11/2018",
        "29/11/2018",
        "30/11/2018",
      ],
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "5"
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
        fontSize: "5"
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
        data: [
          400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100,
          900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020,
          903, 852, 630,
        ],
        type: "line",
        showSymbol: true,
        smooth: true,
        color: "#639",
        lineStyle: {
          color: "rgb(255, 87, 33)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          show: false,
          color: "#ff5721",
          borderColor: "#ff5721",
          borderWidth: 1.5,
        },
        areaStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255, 87, 33, 1)",
                },
                {
                  offset: 0.3,
                  color: "rgba(255, 87, 33, 0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 87, 33, 0)",
                },
              ],
            },
          },
        },
      },
    ],
  };

  const options2 = {
    chart: {
      type: "donut",
      width: "100%"
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "3px",
        fontWeight: "bold"
      }
    },
    series: [44, 55, 41, 17, 15],
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

  const options3 = {
    chart: {
      type: "pie",
      width: "100%"
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "3px",
        fontWeight: "bold"
      }
    },
    series: [44, 55, 41, 17, 15],
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

  const options4 = {
    chart: {
      type: "pie",
      width: "100%"
    },
    dataLabels: {
      enabled: true,
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
    series: [44, 55, 41, 17, 15],
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
            color: undefined,
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
    series: [90],
    labels: ["Median Ratio"]
  };

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
        data: [20, 100, 40, 30, 50, 80, 33]
      }
    ],
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    plotOptions: {
      radar: {
        size: 30,
        polygons: {
          strokeColor: "#e9e9e9",
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
          colors: ["#a8a8a8"],
          fontSize: "3px"
        }
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: ["#a8a8a8"],
          fontSize: "4px"
        }
      }
    }
  };

  const echartZoomBarOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          opacity: 0,
        },
      },
    },
    grid: {
      top: "8%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      data: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
      ],
      axisLabel: {
        inside: true,
        textStyle: {
          color: "#fff",
          fontSize: "3px"
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#999",
          fontSize: "4px"
        },
      },
      splitLine: {
        show: false,
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        // For shadow
        name: "Interested",
        type: "bar",
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,0.05)",
          },
        },
        barGap: "-100%",
        barCategoryGap: "40%",
        data: [
          500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
          500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
          500, 500,
        ],
        animation: false,
      },
      {
        name: "Going",
        type: "bar",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#83bff6",
              },
              {
                offset: 0.5,
                color: "#188df0",
              },
              {
                offset: 1,
                color: "#188df0",
              },
            ]),
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#2378f7",
              },
              {
                offset: 0.7,
                color: "#2378f7",
              },
              {
                offset: 1,
                color: "#83bff6",
              },
            ]),
          },
        },
        data: [
          220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122,
          133
        ],
      },
    ],
  };

  const echartMultipleBarOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "8%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 500,
      interval: 100,
      axisLabel: {
        formatter: "{value}k",
        color: "#333",
        fontSize: "4px",
        fontStyle: "normal",
        fontWeight: 400,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      splitLine: {
        lineStyle: {
          color: "#ddd",
          width: 1,
          opacity: 0.5,
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: [
        "Dec, 1",
        "Dec, 2",
        "Dec, 3",
        "Dec, 4",
        "Dec, 5",
        "Dec, 6",
        "Dec, 7",
      ],
      axisLabel: {
        formatter: "{value}",
        color: "#333",
        fontSize: "4px",
        fontStyle: "normal",
        fontWeight: 400,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
      },
    },
    series: [
      {
        color: "#3182bd",
        name: "Campaign",
        type: "bar",
        barGap: 0,
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: [320, 332, 301, 334, 390, 350, 215],
      },
      {
        color: "#74c475",
        name: "Steppe",
        type: "bar",
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: [220, 182, 191, 234, 290, 190, 210],
      },
      {
        color: "#e6550d",
        name: "Desert",
        type: "bar",
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: [150, 232, 201, 154, 190, 150, 130],
      },
      {
        color: "#756bb1",
        name: "Wetland",
        type: "bar",
        label: {
          normal: {
            show: false,
            position: "insideBottom",
            distance: 5,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 14,
            fontWeight: "bold",
            rich: {
              name: {
                color: "#fff",
              },
            },
          },
        },
        data: [98, 77, 101, 99, 40, 30, 50],
      },
    ],
  };

  const radial = {
    chart: {
      height: 250,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 5,
          size: "28%",
          background: "transparent",
          image: undefined
        },
        dataLabels: {
          name: {
            shows: true,
          },
          value: {
            shows: true,
            fontSize: "6px",
            offsetY: -8
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
            fontSize: "7px",
          }
        }
      }
    },
    stroke: {
      curve: "smooth",
      lineCap: "round"
    },
    series: [44, 55, 67, 83],
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-50px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "117px", marginTop: "-27px", marginBottom: "-15px" }}
                option={echartBasicLineOption}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card" style={{ height: '122px' }}>
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row px-2" style={{ marginTop: "-16px" }}>
              <ul style={{ marginLeft: "13px" }}>
                <li style={{ fontSize: "5px", marginTop: "3px" }}>
                  <div className="ul-widget-app__poll-list mb-1">
                    <div className="row">
                      <div className="col-4">
                        <span className="t-font-boldest ms-auto" style={{ fontSize: "5px" }}>Test</span>
                      </div>
                      <div className="col-7">
                        <ProgressBar
                          style={{ marginTop: "2px" }}
                          now={33}
                          className="progress progress--height-2"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </li>

                <li style={{ fontSize: "5px" }}>
                  <div className="ul-widget-app__poll-list mb-1">
                    <div className="row">
                      <div className="col-4">
                        <span className="t-font-boldest ms-auto" style={{ fontSize: "5px" }}>Test</span>
                      </div>
                      <div className="col-7">
                        <ProgressBar
                          style={{ marginTop: "2px" }}
                          now={33}
                          variant="success"
                          className="progress progress--height-2"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </li>

                <li style={{ fontSize: "5px" }}>
                  <div className="ul-widget-app__poll-list mb-1">
                    <div className="row">
                      <div className="col-4">
                        <span className="t-font-boldest ms-auto" style={{ fontSize: "5px" }}>Test</span>
                      </div>
                      <div className="col-7">
                        <ProgressBar
                          style={{ marginTop: "2px" }}
                          now={33}
                          variant="danger"
                          className="progress progress--height-2"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </li>

                <li style={{ fontSize: "5px" }}>
                  <div className="ul-widget-app__poll-list mb-1">
                    <div className="row">
                      <div className="col-4">
                        <span className="t-font-boldest ms-auto" style={{ fontSize: "5px" }}>Test</span>
                      </div>
                      <div className="col-7">
                        <ProgressBar
                          style={{ marginTop: "2px" }}
                          now={33}
                          variant="danger"
                          className="progress progress--height-2"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </li>

                <li style={{ fontSize: "5px" }}>
                  <div className="ul-widget-app__poll-list mb-1">
                    <div className="row">
                      <div className="col-4">
                        <span className="t-font-boldest ms-auto" style={{ fontSize: "5px" }}>Test</span>
                      </div>
                      <div className="col-7">
                        <ProgressBar
                          style={{ marginTop: "2px" }}
                          now={33}
                          variant="danger"
                          className="progress progress--height-2"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </li>

                <li style={{ fontSize: "5px" }}>
                  <div className="ul-widget-app__poll-list mb-1">
                    <div className="row">
                      <div className="col-4">
                        <span className="t-font-boldest ms-auto" style={{ fontSize: "5px" }}>Test</span>
                      </div>
                      <div className="col-7">
                        <ProgressBar
                          style={{ marginTop: "2px" }}
                          now={33}
                          variant="danger"
                          className="progress progress--height-2"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-sm-12">
          <div className="card" style={{ height: '122px' }}>
            <div className="row">
              <div className="col-12"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
            </div>
            <div className="row">
              <div className="col-12"><p className="muted" style={{ marginLeft: "10px", marginTop: "-25px", fontSize: "4px" }}>Last updated : 20/01/2024</p></div>
            </div>
            <div className="row" style={{ marginTop: "-3px" }}>
              <Chart
                height={100}
                options={options2}
                series={options2.series}
                type={options2.chart.type}
                style={{ marginTop: "-7px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "94px", marginTop: "-25px", marginBottom: "5px" }}
                option={echartBasicLineOption6}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "90px", marginTop: "-20px", marginBottom: "4px" }}
                option={echartStackedPieOption}
              />
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-2">
        <div className="col-lg-4 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-50px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "186px", marginTop: "-27px", marginBottom: "-15px" }}
                option={echartBasicLineOption2}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-sm-12">
          <div className="card" style={{ height: "93px" }}>
            <div className="row">
              <div className="col-12"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
            </div>
            <div className="row">
              <div className="col-12"><p className="muted" style={{ marginLeft: "10px", marginTop: "-25px", fontSize: "4px" }}>Last updated : 20/01/2024</p></div>
            </div>
            <div className="row" style={{ marginTop: "2px" }}>
              <Chart
                height={100}
                options={options6}
                series={options6.series}
                type={options6.chart.type}
                style={{ marginTop: "-33px" }}
              />
            </div>
          </div>
          <div className="card" style={{ marginTop: "5px" }}>
            <div className="row">
              <div className="col-12"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
            </div>
            <div className="row">
              <div className="col-12"><p className="muted" style={{ marginLeft: "10px", marginTop: "-25px", fontSize: "4px" }}>Last updated : 20/01/2024</p></div>
            </div>
            <div className="row" style={{ marginTop: "8px" }}>
              <Chart
                height={92}
                options={options3}
                series={options3.series}
                type={options3.chart.type}
                style={{ marginTop: "-33px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "90px", marginTop: "-30px", marginBottom: "-15px" }}
                option={echartBasicLineOption4}
              />
            </div>
          </div>
          <div className="card" style={{ marginTop: "5px" }}>
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "90px", marginTop: "-29px", marginBottom: "-15px" }}
                option={echartBasicLineOption5}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "187px", marginTop: "-28px", marginBottom: "-15px" }}
                option={echartBasicLineOption1}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <Chart
                height={110}
                options={radar}
                series={radar.series}
                type={radar.chart.type}
                style={{ marginTop: "-30px" }}
              />

              <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
              <Chart
                height={100}
                options={options4}
                series={options4.series}
                type={options4.chart.type}
                style={{ marginTop: "-62px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-lg-4 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-50px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "117px", marginTop: "-27px", marginBottom: "-15px" }}
                option={echartBasicLineOption3}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "94px", marginTop: "-25px", marginBottom: "5px" }}
                option={echartZoomBarOption}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "94px", marginTop: "-25px", marginBottom: "5px" }}
                option={echartMultipleBarOption}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <Chart
                height={134}
                options={radial}
                series={radial.series}
                type={radial.chart.type}
                style={{ marginTop: "-39px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-lg-4 col-sm-12">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-50px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
              <ReactEcharts
                style={{ height: "117px", marginTop: "-27px", marginBottom: "-15px" }}
                option={echartBasicLineOption}
              />
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-50px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
                style={{ height: "117px", marginTop: "-27px", marginBottom: "-15px" }}
                option={echartBasicLineOption3}
              />
            </div>
          </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>

  );
};

export default SocialMedia;