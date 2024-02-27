import Chart from "react-apexcharts";
import ReactEcharts from "echarts-for-react";
import { ProgressBar } from 'react-bootstrap';
import { useEffect } from "react";

const PolarAreaChart = ({ height, data }) => {
  const option = {
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)"
    },
    angleAxis: {
      type: "category",
      data: ["Medan Denai", "Medan Kota", "Medan Sunggal","Medan Baru", "Medan Marelan"],
      z: 10,
      axisLine: {
        show: false
      },
      axisLabel: {
        fontSize: 7
      }
    },
    radiusAxis: {
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    polar: {},
    series: [
      {
        type: "bar",
        data: data,
        coordinateSystem: "polar",
        name: "data",
        stack: "a",
        radius: "15%",
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          },
          borderRadius: [5, 5, 0, 0],
          color: "#6962AD"
        }
      }
    ],
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
};

const PieChartDashboard = ({ height, color = [] }) => {
  const option = {
    color: ["#2D9596", "#9AD0C2", "#265073", "#1B1A55",],
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)"
    },

    series: [
      {
        name: "Data Satu Medan",
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data: [
          { value: 735, name: "Medan Kota" },
          { value: 388, name: "Medan Sunggal" },
          { value: 334, name: "Medan Denai" },
          { value: 255, name: "Medan Marelan" },
          { value: 50, name: "Medan Baru" },
          { value: 155, name: "Medan Polonia" },
        ],
        label: {
            fontSize:7
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
};

const BarChart = ({ height, color = [], data }) => {
  const option = {
    legend: {
      borderRadius: 4,
      orient: "horizontal",
      x: "right",
      data: ["tahun"]
    },
    grid: {
      left: "3px",
      right: "3px",
      bottom: "0",
      containLabel: true
    },
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)"
    },
    xAxis: [
      {
        type: "category",
        data: ['A','B','C','D','E','F','G'],
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          fontSize: 7 // Mengatur ukuran font untuk label sumbu x
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value}"
        },
        min: 0,
        max: 30,
        interval: 10,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          interval: "{value}"
        },
        axisLabel: {
          fontSize: 7 // Mengatur ukuran font untuk label sumbu y
        }
      }
    ],

    series: [
      {
        name: "data",
        data: data,
        label: { show: false, color: "#FE6F5D" },
        type: "bar",
        barGap: 0,
        color: "#FE6F5D",
        // Hitung lebar batang relatif terhadap jumlah data
        barWidth: 50 / data.length + "%",
        barCategoryGap: "2%",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          },
          borderRadius: [5, 5, 0, 0]
        },
        labels:{
            style: {
                fontSize:"7px" // Mengatur ukuran font untuk label series
            }
        }
      }
    ]
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
};

export const options7 = {
  chart: {
      toolbar:{
          show:false
      },
      type: 'bar',
  },
  plotOptions: {
      bar: {
          horizontal: true,
          endingShape: 'rounded',
          barHeight:"30px"
      }
  },
  dataLabels: {
      enabled: true,
      style: {
          fontSize: '7px'
      }
  },
  series: [{
      data: [ 10, 20, 5],
      dataLabels: {
          style: {
              fontSize: '5px',
              fontWeight: 'bold'
          }
      }
  }],
  xaxis: {
      categories: ['Medan Kota','Medan Denai','Medan Marelan'],
      labels: {
          style: {
              fontSize: '7px'
          }
      },
      plotOptions: {
          barHeight: "10px"
      }
  },
  yaxis: {
      labels: {
          style: {
              fontSize: '8px'
          }
      }
  }
}

export const options1Dash = {
  chart: {
    type: "donut",
    width: "80%" // Mengatur lebar doughnut chart menjadi 100%
  },
  series: [10, 5, 15, 20],
  labels: ['Medan Kota','Medan Sunggal', 'Medan Baru', 'Medan Denai'],
  // title: {
  //   text: "Title",
  //   style: {
  //     fontSize: "14px", // Mengatur ukuran font judul
  //     fontWeight: "bold" // Mengatur berat font judul
  //   }
  // },
  dataLabels: {
    style: {
      fontSize: "5px" // Mengatur ukuran font label
    }
  },
  legend: {
    show:false,
    position: "bottom",
    fontSize: "5px" // Mengatur ukuran font legenda
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 30 // Mengatur lebar doughnut chart menjadi 200 piksel
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
};

const YourComponent = () => {

  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 1000*30);

    return () => clearInterval(intervalId);
  }, []);

  const data = [20,5,10,30,25]
  return (

      //left
      <div className="row" style={{marginTop:"-18px"}}>
        <div className="col-md-3 mb-2">
          <div className="card rounded-3" style={{height:"487px"}}>
            <div className="card-body">
              <div className="row">
              <div className="col-5">
                <h4 className="card-subtitle text-info mt-0 text-muted mb-3">
                      <i className="i-Globe"></i> Title
                    </h4>
                </div>
                <div className="col-5"><p className="muted" style={{ marginRight: "-40px", marginTop: "16px", fontSize: "8px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
                </div>
                  
                <img src="/assets/images/Peta_Lokasi_Kecamatan_Kota_Medan.png"  style={{ objectFit: "cover", width: "100%", height: "92%" }} alt="gambarkotamedan"/>
            </div>
          </div>
        </div>

      {/* left-middle */}
        <div className="col-md-3 mb-2 d-flex flex-column">
          <div className="row">
              <div className="col-md-4 mb-2">
                <div className="card  mb-2">
                  <div className="card-body text-center">
                    <div className="row" style={{marginTop:"-10px"}}>
                      <div className="col-12">
                        <i className="i-MaleFemale  text-danger rounded-circle p-2"></i>
                      </div>
                      <div className="col-12">
                        <small className="text-light" style={{fontSize:"7px"}}>Penduduk</small>
                      </div>
                      <div className="col-12" style={{marginTop:"-4px"}}>
                      <p className="t-font-bold text-primary mt-0 mb-0 text-capitalize">809
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-center">
                  <div className="row" style={{marginTop:"-10px"}}>
                      <div className="col-12">
                        <i className="i-Male-21  text-success rounded-circle p-2"></i>
                      </div>
                      <div className="col-12">
                        <small className="text-light" style={{fontSize:"7px"}}>Data Pria</small>
                      </div>
                      <div className="col-12" style={{marginTop:"-4px"}}>
                      <p className="t-font-bold text-primary mt-0 mb-0 text-capitalize">502
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-center">
                  <div className="row" style={{marginTop:"-10px"}}>
                      <div className="col-12">
                        <i className="i-Female-21  text-warning rounded-circle p-2"></i>
                      </div>
                      <div className="col-12">
                        <small className="text-light" style={{fontSize:"5px"}}>Data Wanita</small>
                      </div>
                      <div className="col-12" style={{marginTop:"-4px"}}>
                      <p className="t-font-bold text-primary mt-0 mb-0 text-capitalize">307
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-5">
                          <h4 className="card-subtitle mb-2 text-info mt-0 text-muted">
                          <i className="i-Pie-Chart-2"></i> Title
                        </h4>
                      </div>
                      <div className="col-5"><p className="muted" style={{ marginRight: "-40px", marginTop: "2px", fontSize: "5px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
                    </div>
                    <PolarAreaChart height="90px" width="50px" data={data}></PolarAreaChart>
                  </div>
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                  <div className="row">
                      <div className="col-5">
                          <h4 className="card-subtitle mb-2 text-info mt-0 text-muted">
                          <i className="i-Pie-Chart-2"></i> Title
                        </h4>
                      </div>
                      <div className="col-5"><p className="muted" style={{ marginRight: "-40px", marginTop: "2px", fontSize: "5px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
                    </div>
                    <Chart
                    options={options7}
                    series={options7.series}
                    type={options7.chart.type}
                    height="120px"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* right-middle */}
        <div className="col-md-4 mb-2">
          <div className="row">
            <div className="col-md-6 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                    <p className="text-18 text-success line-height-1 mb-2">
                      <i className="i-Conference"></i> 85%
                    </p>
                    <ProgressBar
                    variant="success"
                    now={50}
                    style={{ height: "4px" }}
                    ></ProgressBar>
                    <small className="text-light">
                     Penduduk Bersekolah
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                  <p className="text-18 text-danger line-height-1 mb-2">
                      <i className="i-Cool-Guy"></i> 85%
                    </p>
                    <ProgressBar
                    variant="danger"
                    now={50}
                    style={{ height: "4px" }}
                    ></ProgressBar>
                    <small className="text-light">
                     Belum Bersekolah
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                  <div className="row">
                      <div className="col-5">
                          <h4 className="card-subtitle mb-2 text-info mt-0 text-muted">
                          <i className="i-Pie-Chart-2"></i> Title
                        </h4>
                      </div>
                      <div className="col-5"><p className="muted" style={{ marginRight: "-40px", marginTop: "0px", fontSize: "5px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
                    </div>
                    <PieChartDashboard height="90px" data={data}></PieChartDashboard>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                  <div className="row">
                      <div className="col-8">
                          <h4 className="card-subtitle mb-2 text-info mt-0 text-muted">
                          <i className="i-Pie-Chart-2"></i> Title
                        </h4>
                      </div>
                      <div className="col-2"><p className="muted" style={{ marginRight: "-40px", marginTop: "0px", fontSize: "5px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
                    </div>
                    <BarChart height="132px" data={data}></BarChart>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-left">
                  <div className="row">
                      <div className="col-8">
                          <h4 className="card-subtitle mb-2 text-info mt-0 text-muted">
                          <i className="i-Pie-Chart-2"></i> Title
                        </h4>
                      </div>
                      <div className="col-2"><p className="muted" style={{ marginRight: "-40px", marginTop: "0px", fontSize: "5px", textAlign:"right" }}>Last updated on 2 Sep 2021</p></div>
                    </div>
                  <Chart 
                    height="153px"
                    options={options1Dash}
                    series={options1Dash.series}
                    type={options1Dash.chart.type}
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* right */}
        <div className="col-md-2 mb-2">
          <div className="row">
            <div className="col-md-12 mb-2">
                <div className="card mb-2">
                  <div className="card-body text-center">
                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">....</th>
                        </tr>
                      </thead>
                    </table>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <td scope="col">.....</td>
                          <td scope="col">.....</td>
                        </tr>
                      </thead>
                    </table>
                    <br />
                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">....</th>
                        </tr>
                      </thead>
                    </table>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                        </tr>
                        <tr>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-0">
                <div className="card mb-0">
                  <div className="card-body text-center">
                    <table class="table table-dark table-striped" style={{marginBottom:"5px"}}>
                        <thead>
                          <tr>
                            <th scope="col">....</th>
                            <th scope="col">....</th>
                            <th scope="col">....</th>
                            <th scope="col">....</th>
                          </tr>
                        </thead>
                        <thead>
                        <tr>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                        </tr>
                        <tr>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                          <td scope="col">..</td>
                        </tr>
                        </thead>
                      </table>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
};

export default YourComponent;
