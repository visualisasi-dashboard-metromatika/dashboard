import { echartOptions } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import ReactEcharts from "echarts-for-react";
import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import FlipCard from 'react-card-flip';

const DashboardSatuData = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsFlipped(true);
      // Ensure the flip state is reset after a short delay
      setTimeout(() => {
        setIsFlipped(false);
      }, 2000);
    };

    const intervalId = setInterval(() => {
      window.location.reload();
    }, 1000 * 60);

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(intervalId);
    };
  }, []);

  // Basic Bar Option
  const echartBasicBarOption = {
    grid: {
      show: false,
      top: 7,
      left: 1,
      right: 1,
      bottom: 0,
    },
    color: ["#EE4266"],
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    xAxis: [
      {
        type: "category",
        data: ["Label1", "Label2", "Label3", "Label4", "Label5", "Label6", "Label7", "Label8", "Label9"],
        axisTick: {
          alignWithLabel: true,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "#333A73",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Y-Axis Label",
        nameTextStyle: {
          color: "#333A73",
        },
        label: {
          show: true,
          color: "#333A73",
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        data: [400, 900, 325, 900, 700, 800, 400, 200, 600],
        label: {
          show: true,
          position: 'top',
          color: "#333A73",
          fontSize: 6,  // Adjust the font size for series labels
        },
        type: "bar",
        barWidth: "70%",
        smooth: true,
      },
    ],
  };

  // Multiline Option
  const echartMultilineOption = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "3%",
      bottom: "10",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      axisLabel: {
        color: "#999",
        fontSize: 10,
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
        fontSize: 10,
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
        name: "Medan",
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
        name: "Marelan",
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
        name: "Binjai",
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

  // Multiple Bar2 Option
  const echartMultipleBar2Option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "5",
      left: "20",
      right: "20",
      bottom: "15",
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
        fontSize: 5,
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
        fontSize: 5,
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

  // Multiple Bar Option
  const echartMultipleBarOption = {
    grid: {
      show: false,
      left: "23",
      right: "25",
      bottom: "12",
      top: "5",
      containLabel: true,
    },
    legend: {
      borderRadius: 0,
      orient: "horizontal",
      x: "right",
      data: ["Online", "Offline"],
      textStyle: {
        color: "#444",
        fontSize: 5, // Adjust the font size of the legend
      },
    },
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          color: "#444",
          fontSize: 5, // Adjust the font size of the x-axis labels
        },
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: "#aaa",
          },
          color: "#eee",
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#aaa",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "${value}",
          color: "#444",
          fontSize: 5, // Adjust the font size of the y-axis labels
        },
        min: 0,
        max: 100000,
        interval: 25000,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          interval: "auto",
        },
        axisTick: {
          show: false,
          color: "#eee",
        },
      },
    ],
    series: [
      {
        name: "Series 1",
        data: [
          35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000,
          20000, 30005,
        ],
        label: {
          show: false,
          color: "#0168c1",
        },
        type: "bar",
        barGap: 0,
        smooth: true,
      },
      {
        name: "Series 2",
        data: [
          45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000,
          35000, 40050,
        ],
        label: {
          show: false,
          color: "#0168c1",
        },
        type: "bar",
        smooth: true,
      },
    ],
  };

  // Zoom Bar Option
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
      top: "4",
      left: "2",
      right: "0",
      bottom: "2",
      containLabel: true,
    },
    xAxis: {
      data: [
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
      ],
      axisLabel: {
        inside: true,
        textStyle: {
          color: "#fff",
          fontSize: 8, // Adjust the font size of x-axis labels
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
          fontSize: 8, // Adjust the font size of y-axis labels
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
          133, 334, 198, 123, 125, 220, 220, 182, 191, 234, 290, 330, 310, 123,
          442, 212,
        ],
      },
    ],
  };

  // Basic Line Option
  const echartBasicLineOption = {
    tooltip: {
      show: true,
      trigger: "axis",
      axisPointer: {
        type: "line",
        animation: true,
      },
    },
    grid: {
      top: "10%",
      left: "40",
      right: "20",
      bottom: "30",
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
        fontSize: "7px"
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: "7px"
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
      },
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
          opacity: 1,
          width: 2,
        },
      },
    ],
  };

  // Echart3
  const option = {
    ...echartOptions.defaultOptions,
    ...{
      series: [
        {
          data: [2, 2, 7, 4, 6, 4, 8],
          ...echartOptions.smoothLine,
          lineStyle: {
            color: "#4CAF50",
            ...echartOptions.lineShadow
          },
          itemStyle: {
            color: "#4CAF50"
          },
        }
      ]
    }
  };

  const Echart3 = ({ height }) => {
    return <ReactEcharts style={{ height: height }} option={option} />;
  };

  // Basic Pie
  const echartBasicPie = {
    color: ["#c13018", "#f36d12", "#ebcb37", "#a0b967", "#0d94bc", "#04a9f4"],
    series: [
      {
        name: "Medan",
        type: "pie",
        radius: "80%",
        center: ["50%", "50%"],
        data: [
          {
            value: 335,
            name: "A2",
          },
          {
            value: 310,
            name: "Deli",
          },
          {
            value: 234,
            name: "Tebing",
          },
          {
            value: 135,
            name: "A1",
          },
          {
            value: 148,
            name: "Binjai",
          },
          {
            value: 548,
            name: "Labu",
          },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          fontSize: 8,
        },
      },
    ],
  };

  // Basic Radar Chart
  const BasicRadarChart = {
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

  return (
    <div>

      {/* 1 */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 position-relative">
          {/* Front of the card */}
          <FlipCard isFlipped={isFlipped}>
            <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-2" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-2" style={{ marginLeft: "20px" }}>Title 1</h6>
              <div className="card-body text-center" style={{ height: "100px" }}>
                <i className="i-Calendar-3" style={{ fontSize: '70px', marginTop: '-15px' }}></i>
                <div className="text-center mt-2" style={{ marginLeft: "25px" }}>
                  <p className="t-font-boldiest mb-0 text-capitalize" style={{ fontSize: '17px', marginTop: '-15px' }}>
                    24 Feb 2024
                  </p>
                  <p className="lead text-primary text-24 mb-2 text-capitalize" style={{ fontSize: '18px', marginLeft: '2px' }}>
                    12.00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* Back of the card (empty for now) */}
            <div onClick={() => setIsFlipped((prev) => !prev)}>
            </div>
          </FlipCard>
        </div>

        <div className="col-lg-9 col-md-6 col-sm-12">
          {/* Front of the card */}
          <FlipCard isFlipped={isFlipped}>
            <div className="card mb-2" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-2" style={{ marginLeft: "20px", position: "relative" }}>
                Title 2
                <span style={{ position: "absolute", top: 10, right: 20, fontSize: "6px" }}>
                  Last updated: 24/02/2024
                </span>
              </h6>
              <ReactEcharts
                style={{ height: "100%" }}
                option={echartMultilineOption}
              />
            </div>

            {/* Back of the card (empty for now) */}
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
      </div>

      {/* 2 */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
          {/* Front of the card */}
          <FlipCard isFlipped={isFlipped}>
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-3" style={{ marginLeft: "20px", position: "relative" }}>
                Title 3
                <span style={{ position: "absolute", top: 7, right: 20, fontSize: "6px" }}>
                  Last updated: 24/02/2024
                </span>
              </h6>
              <ReactEcharts
                style={{ height: "115px", marginLeft: "20px", marginRight: "20px", marginBottom: "10px" }}
                option={echartBasicBarOption}
              />
            </div>

            {/* Back of the card (empty for now) */}
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {/* Front of the card */}
          <FlipCard isFlipped={isFlipped}>
            <div className="card mb-2" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-3 position-relative" style={{ marginLeft: "20px" }}>
                Title 4
                <span style={{ position: "absolute", top: 7, right: 20, fontSize: "6px" }}>
                  Last updated: 24/02/2024
                </span>
              </h6>
              <div className="table-responsive p-2">
                <table className="table" style={{ fontSize: '9px' }}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Kolom 1</th>
                      <th scope="col">Kolom 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-success">
                      <th scope="row">1</th>
                      <td>Medan</td>
                      <td>Medan</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Medan</td>
                      <td>Medan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Back of the card (empty for now) */}
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {/* Front of the card */}
          <FlipCard isFlipped={isFlipped}>
            <div className="card mb-2" onClick={() => setIsFlipped((prev) => !prev)}>
              <SimpleCard title={
                <div style={{ position: "relative" }}>
                  Title 5
                  <span style={{ position: "absolute", top: 5, right: 0, fontSize: "6px" }}>
                    Last updated: 24/02/2024
                  </span>
                </div>
              } className="mb-2">
                <ReactEcharts
                  style={{ height: "85px" }}
                  option={echartZoomBarOption}
                />
              </SimpleCard>
            </div>

            {/* Back of the card (empty for now) */}
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
          {/* Front of the card */}
          <FlipCard isFlipped={isFlipped}>
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              <SimpleCard title={
                <div style={{ position: "relative" }}>
                  Title 6
                  <span style={{ position: "absolute", top: 7, right: 0, fontSize: "6px" }}>
                    Last updated: 24/02/2024
                  </span>
                </div>
              }>
                <ReactEcharts
                  style={{ height: "85px" }}
                  option={echartBasicPie} />
              </SimpleCard>
            </div>

            {/* Back of the card (empty for now) */}
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
      </div>

      {/* 3 */}
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-12">
          <FlipCard isFlipped={isFlipped}>
            <SimpleCard title={
              <div style={{ position: "relative" }}>
                Title 7
                <span style={{ position: "absolute", top: 3, right: 0, fontSize: "6px" }}>
                  Last updated: <br />
                  24/02/2024
                </span>
              </div>
            } className="mb-2">
              <div className="d-flex align-items-center" style={{ marginTop: "-17px" }}>
                <i className="i-Up text-success" style={{ fontSize: '12px', marginRight: '5px' }}></i>
                <p style={{ color: 'green', fontSize: '12px', margin: '0' }}>15%</p>
              </div>
              <Echart3 height="25px" />
              <Echart3 height="25px" />
            </SimpleCard>

            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
          <FlipCard isFlipped={isFlipped}>
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-2 position-relative" style={{ marginLeft: "20px" }}>
                Title 8
                <span style={{ position: "absolute", top: 7, right: 20, fontSize: "6px" }}>
                  Last updated: 24/02/2024
                </span>
              </h6>
              <ReactEcharts
                style={{ height: "100%" }}
                option={echartMultipleBarOption}
              />
            </div>

            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
          <FlipCard isFlipped={isFlipped}>
            <div className="card" style={{ height: "137px", position: "relative" }} onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-2" style={{ marginLeft: "20px" }}>
                Title 9
                <span style={{ position: "absolute", top: 15, right: 20, fontSize: "6px" }}>
                  Last updated: 24/02/2024
                </span>
              </h6>
              <Chart
                height={110}
                options={BasicRadarChart}
                series={BasicRadarChart.series}
                type={BasicRadarChart.chart.type}
                style={{ marginTop: "-5px" }}
              />
            </div>

            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 mb-2">
          <FlipCard isFlipped={isFlipped}>
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-2 position-relative" style={{ marginLeft: "20px" }}>
                Title 10
                <span style={{ position: "absolute", top: 3, right: 8, fontSize: "6px" }}>
                  Last updated: <br />
                  24/02/2024
                </span>
              </h6>
              <ReactEcharts
                style={{ height: "100%" }}
                option={echartBasicLineOption}
              />
            </div>

            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 mb-2">
          <FlipCard isFlipped={isFlipped}>
            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              <h6 className="card-title mb-2 mt-2 position-relative" style={{ marginLeft: "20px" }}>
                Title 11
                <span style={{ position: "absolute", top: 3, right: 8, fontSize: "6px" }}>
                  Last updated: <br />
                  24/02/2024
                </span>
              </h6>
              <ReactEcharts
                style={{ height: "100%" }}
                option={echartMultipleBar2Option}
              />
            </div>

            <div className="card" onClick={() => setIsFlipped((prev) => !prev)}>
              {/* Add any content for the back of the card if needed */}
            </div>
          </FlipCard>
        </div>
      </div>

    </div >
  )
}

export default DashboardSatuData;
