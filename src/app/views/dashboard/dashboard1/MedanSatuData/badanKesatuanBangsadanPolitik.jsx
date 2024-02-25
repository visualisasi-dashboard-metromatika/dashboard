import React from 'react'
import ReactEcharts from "echarts-for-react";
import Chart from "react-apexcharts";

export default function BadanKesatuanBangsadanPolitik() {
  const options5 = {
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

  const echartBasicLineOption7 = {
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
        "11/11/2018"
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
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135
        ],
        symbolSize: 8,
        showSymbol: false,
        lineStyle: {
          color: "rgb(95, 107, 194)",
          opacity: 1,
          width: 1.5,
        },
        itemStyle: {
          color: "#ff5721",
          borderColor: "#ff5721",
          borderWidth: 1.5
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

  const echartBasicLineOption8 = {
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
        "11/11/2018"
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
          140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135
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


  return (
    <div>
      <div className="row">
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption7}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">
            <ReactEcharts
              style={{ height: "100px", marginTop: "-30px", marginBottom: "-15px" }}
              option={echartBasicLineOption8}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="card">
            <div className="row">
              <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title</b></p></div>
              <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
            </div>
            <div className="row">

            <p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}></p>
            <Chart
              height={110}
              options={options5}
              series={options5.series}
              type={options5.chart.type}
              style={{ marginTop: "-60px", marginBottom: "-5px" }}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
