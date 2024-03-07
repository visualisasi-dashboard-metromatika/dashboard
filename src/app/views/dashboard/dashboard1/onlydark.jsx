import ReactEcharts from "echarts-for-react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import "./dark.css";
import { Button } from "react-bootstrap";
import Line from "./charts/Line";
import Bar from "./charts/Bar";
import Gauge from "./charts/Gauge";
import Pie from "./charts/Pie";
import MonoPie from "./charts/MonoPie";
import PieStack from "./charts/PieStack";
import Donut from "./charts/Donut";
import Radar from "./charts/Radar";

const Test = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const currentDayName = dayNames[currentDateTime.getDay()];
  const currentDate = currentDateTime.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = currentDateTime.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

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
          }
        ].sort(function (a, b) {
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
        "10/11/2018"
      ],
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
      }
    },
    series: [
      {
        name: "Visit",
        type: "bar",
        smooth: false,
        data: [
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140
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
      ],
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
        data: [
          400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100,
        ],
        type: "line",
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
    <div>
      <div className="row" style={{ marginTop: "-12px" }}>
        <div className="w-1/6">
          <div className="w-1/6">
            <div className="card" style={{ borderRadius: "8px" }}>
              <button type="button" class="text-white bg-green-700 hover:bg-green-800 col-lg-12 p-0" style={{ height: "30px", fontSize: "10px", borderRadius: "6px" }}>
                <span className="ul-btn__icon">
                  <i className="i-Telephone"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/6"></div>
        <div className="w-1/6 ">
          <div className="card">
            <p className="m-1 text-center" style={{ fontSize: "10" }}>
              {currentTime} WIB
            </p>
          </div>
        </div>
        <div className="w-1/6">
          <div className="card">
            <p className="m-1 text-center" style={{ fontSize: "10" }}>
              {currentDayName} / {currentDate}
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Inflasi Kota Medan
            </Button>
          </div>
          <div className="row mt-2">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 1</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Line
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo']}
                  dataValue={[100, 300, 200, 100, 150]}
                  style={{ height: "190px", marginTop: "-27px", marginBottom: "-15px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Pertumbuhan Ekonomi Kota Medan
            </Button>
          </div>
          <div className="row mt-2">
            <div className="card" style={{ height: "93px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 2</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "-5px" }}>
                <Gauge
                  height={107}
                  style={{ marginTop: "-33px" }}
                  series={80}
                />
              </div>
            </div>
            <div className="card mt-2" style={{ marginTop: "0px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 3</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "3px" }}>
                <Pie
                  height={99}
                  style={{ marginTop: "-33px" }}
                  data={["jawa", "padang", "batak", "melayu"]}
                  dataValue={[100, 35, 60, 80]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            {/* <img src={peta} alt="" style={{height:"233px"}}/> */}
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Indeks Pembangunan Manusia Kota Medan
            </Button>
          </div>
          <div className="row mt-2">
            <div className="card" style={{ height: "93px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 4</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "-5px" }}>
                <MonoPie
                  height={90}
                  style={{ marginTop: "-24px" }}
                  data={["jawa", "padang", "batak", "melayu", "karo"]}
                  dataValue={[100, 35, 60, 80, 89]}
                />
              </div>
            </div>
            <div className="card mt-2" style={{ marginTop: "0px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 5</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "3px" }}>
                <Donut
                  height={99}
                  style={{ marginTop: "-33px" }}
                  data={["jawa", "padang", "batak", "melayu"]}
                  dataValue={[100, 35, 60, 80]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Statistik Kesra Kota Medan
            </Button>
          </div>
          <div className="row mt-2">

            <div className="card" style={{ border: "2px solid #324f6b" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 6</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Radar
                  height={158}
                  style={{ marginTop: "0px", marginBottom: "-24px" }}
                  data={["dayak", "jawa", "padang", "batak", "melayu"]}
                  dataValue={[9, 90, 35, 60, 80]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="w-2/7 px-3">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 7</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <PieStack
                  series="Suku"
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo']}
                  dataValue={[235, 274, 310, 335, 400]}
                  style={{ height: "164px", marginTop: "-20px", marginBottom: "4px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/7 px-3">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 8</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Line
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo']}
                  dataValue={[100, 300, 200, 100, 150]}
                  style={{ height: "190px", marginTop: "-27px", marginBottom: "-15px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/7 px-3">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 9</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Bar
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo', 'dayak']}
                  dataValue={[100, 300, 200, 100, 150, 298]}
                  style={{ height: "193px", marginTop: "-30px", marginBottom: "-15px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Test;