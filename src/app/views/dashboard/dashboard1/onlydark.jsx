import { useCallback, useState, useEffect } from "react";
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
import datas from "../../../../assets/json/satudata_res.json"
import axios from "axios";
import RechartBar from "./charts/RechartBar";
import RechartLine from "./charts/RechartLine.jsx";
import Unavailable from "./charts/Unavailable";

const Dark = () => {
  const [data, setData] = useState(datas.result);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(50);

  // const grtDataCallback = useCallback(async () => {
  //   await axios.get(`https://medansatudata-api.metromatika.com/api/public/data?page=${currentPage}`).then((result) => {
  //     setData(result.data.result);
  //     setTotalPages(result.data.totalPages);
  //     console.log(totalPages)
  //     console.log(currentPage)
  //     console.log(data)
  //   });
  // }, [currentPage]);

  const getDataCallback = async () => {
    const result = await axios.get(`https://medansatudata-api.metromatika.com/api/public/data?page=${currentPage}`);
      setData(result.data.result);
      setTotalPages(result.data.totalPages);
      console.log(result.data.totalPages);
      console.log(totalPages);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentPage >= totalPages) {
        setCurrentPage(1)
        getDataCallback()
      } else {
        setCurrentPage(currentPage + 1)
        getDataCallback()
      }
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentPage]);

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  // useEffect(() => {
  //   if (currentPage >= totalPages) {
  //     setCurrentPage(10)
  //     grtDataCallback();
  //   } else {
  //     setCurrentPage(currentPage + 1);
  //     grtDataCallback();
  //   }
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
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

  // console.log(data.length)
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
            {data[0].chartType === "bar" ?
              <RechartBar
                chartData={data[0].chartData}
                chartTitle={data[0].title}
                height={156}
                updated={data[0].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[0].chartType === "line" ?
                <RechartLine
                  x={data[0].chartData.x}
                  checkedItems={data[0].chartData.checkedItems}
                  width={250}
                  height={156}
                  chartTitle={data[0].title}
                  updated={data[0].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[0].title}
                  style={{height:"156px"}}
                />
            }
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
          {data[1].chartType === "bar" ?
              <RechartBar
                chartData={data[1].chartData}
                chartTitle={data[1].title}
                height={156}
                updated={data[1].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[1].chartType === "line" ?
                <RechartLine
                  x={data[1].chartData.x}
                  checkedItems={data[1].chartData.checkedItems}
                  width={250}
                  height={156}
                  chartTitle={data[1].title}
                  updated={data[1].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[1].title}
                  style={{height:"156px"}}
                />
            }
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
          {data[2].chartType === "bar" ?
              <RechartBar
                chartData={data[2].chartData}
                chartTitle={data[2].title}
                height={156}
                updated={data[2].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[2].chartType === "line" ?
                <RechartLine
                  x={data[2].chartData.x}
                  checkedItems={data[2].chartData.checkedItems}
                  width={250}
                  height={156}
                  chartTitle={data[2].title}
                  updated={data[2].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[2].title}
                  style={{height:"156px"}}
                />
            }
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
            {data[3].chartType === "bar" ?
              <RechartBar
                chartData={data[3].chartData}
                chartTitle={data[3].title}
                height={156}
                updated={data[3].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[3].chartType === "line" ?
                <RechartLine
                  x={data[3].chartData.x}
                  checkedItems={data[3].chartData.checkedItems}
                  width={250}
                  height={156}
                  chartTitle={data[3].title}
                  updated={data[3].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[3].title}
                  updated={data[3].updatedAt}
                  style={{height:"156px"}}
                />
            }
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="w-2/7 px-3">
          <div className="row">
            {data[4].chartType === "bar" ?
              <RechartBar
                chartData={data[4].chartData}
                chartTitle={data[4].title}
                height={156}
                updated={data[4].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[4].chartType === "line" ?
                <RechartLine
                  x={data[4].chartData.x}
                  checkedItems={data[4].chartData.checkedItems}
                  width={370}
                  height={156}
                  chartTitle={data[4].title}
                  updated={data[4].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[4].title}
                  updated={data[4].updatedAt}
                  style={{height:"156px"}}
                />
            }
          </div>
        </div>
        <div className="w-3/7 px-3">
          <div className="row">
            {data[5].chartType === "bar" ?
              <RechartBar
                chartData={data[5].chartData}
                chartTitle={data[5].title}
                height={156}
                updated={data[5].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[5].chartType === "line" ?
                <RechartLine
                  x={data[5].chartData.x}
                  checkedItems={data[5].chartData.checkedItems}
                  width={550}
                  height={156}
                  chartTitle={data[5].title}
                  updated={data[5].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[5].title}
                  updated={data[5].updatedAt}
                  style={{height:"156px"}}
                />
            }
          </div>
        </div>
        <div className="w-2/7 px-3">
          <div className="row">
            {data[6].chartType === "bar" ?
              <RechartBar
                chartData={data[6].chartData}
                chartTitle={data[6].title}
                height={156}
                updated={data[6].updatedAt}
                style={{ marginLeft: "-35px" }}
              />
              : data[6].chartType === "line" ?
                <RechartLine
                  x={data[6].chartData.x}
                  checkedItems={data[6].chartData.checkedItems}
                  width={370}
                  height={156}
                  chartTitle={data[6].title}
                  updated={data[6].updatedAt}
                  style={{ marginLeft: "-35px" }}
                />
                :
                <Unavailable
                  title={data[6].title}
                  updated={data[6].updatedAt}
                  style={{height:"156px"}}
                />
            }
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dark;